import type { VercelRequest, VercelResponse } from '@vercel/node';
import { setCdnCache } from './_lib/cache';
import type { Project } from '../src/shared/types/project';
import type { NotionDatabaseQueryResponse, NotionPage } from './_types/notion';

const NOTION_TOKEN = process.env.NOTION_TOKEN!;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID!;
const NOTION_VERSION = '2022-06-28';
const NOTION_PROJECT_PROPS = {
  primaryTitle: 'Name',
  fallbackTitle: 'Title',
  slug: 'Slug',
  tags: '관련태그',
  url: 'URL',
  period: '작업기간',
  projectName: '프로젝트명',
  thumbnail: 'Thumbnail',
} as const;

function getTitle(page: NotionPage): string {
  const prop =
    page.properties?.[NOTION_PROJECT_PROPS.primaryTitle] ??
    page.properties?.[NOTION_PROJECT_PROPS.fallbackTitle];
  if (!prop || prop.type !== 'title') {
    return '(untitled)';
  }
  const arr = prop?.title ?? [];
  return arr.map((t) => t.plain_text).join('') || '(untitled)';
}

function getMultiSelect(page: NotionPage, key: string): string[] {
  const prop = page.properties?.[key];
  if (!prop || prop.type !== 'multi_select') {
    return [];
  }
  const arr = prop?.multi_select ?? [];
  return arr.map((x) => x.name);
}

function getUrl(page: NotionPage, key: string): string | undefined {
  const prop = page.properties?.[key];
  if (!prop || prop.type !== 'url') {
    return undefined;
  }
  return prop.url ?? undefined;
}

function getDateRange(
  page: NotionPage,
  key: string
): { startDate?: string; endDate?: string } {
  const prop = page.properties?.[key];
  if (!prop || prop.type !== 'date') {
    return { startDate: undefined, endDate: undefined };
  }

  return {
    startDate: prop.date?.start ?? undefined,
    endDate: prop.date?.end ?? undefined,
  };
}

function getRichText(page: NotionPage, key: string): string | undefined {
  const prop = page.properties?.[key];
  if (!prop || prop.type !== 'rich_text') {
    return undefined;
  }
  return prop.rich_text.map((t) => t.plain_text).join('') || undefined;
}

function parseSlug(raw?: string) {
  const s = (raw ?? '').trim();
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(s)) return undefined;
  return s;
}

function getText(page: NotionPage, key: string): string | undefined {
  const prop = page.properties?.[key];

  if (!prop) {
    return undefined;
  }

  if (prop.type === 'rich_text') {
    return prop.rich_text.map((t) => t.plain_text).join('') || undefined;
  }

  if (prop.type === 'title') {
    return prop.title.map((t) => t.plain_text).join('') || undefined;
  }

  return undefined;
}

function getFilesFirstUrl(
  page: NotionPage,
  propertyName: string
): string | undefined {
  const prop = page.properties?.[propertyName];

  if (!prop || prop.type !== 'files') {
    return undefined;
  }

  const file = prop.files[0];
  if (!file) {
    return undefined;
  }

  if (file.type === 'external') {
    return file.external.url;
  }

  if (file.type === 'file') {
    return file.file.url;
  }

  return undefined;
}

function toProject(page: NotionPage): Project | null {
  const { startDate, endDate } = getDateRange(
    page,
    NOTION_PROJECT_PROPS.period
  );
  const slug = parseSlug(getRichText(page, NOTION_PROJECT_PROPS.slug));

  if (!slug) {
    return null;
  }

  return {
    slug,
    title: getTitle(page),
    tags: getMultiSelect(page, NOTION_PROJECT_PROPS.tags),
    url: getUrl(page, NOTION_PROJECT_PROPS.url),
    startDate,
    endDate,
    projectName: getText(page, NOTION_PROJECT_PROPS.projectName),
    thumbnailUrl: getFilesFirstUrl(page, NOTION_PROJECT_PROPS.thumbnail),
  };
}

function isProject(value: Project | null): value is Project {
  return value !== null;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (!NOTION_TOKEN || !NOTION_DATABASE_ID) {
      return res
        .status(500)
        .json({ error: 'Missing NOTION_TOKEN or NOTION_DATABASE_ID' });
    }

    const notionRes = await fetch(
      `https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${NOTION_TOKEN}`,
          'Notion-Version': NOTION_VERSION,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          page_size: 100,
        }),
      }
    );

    if (!notionRes.ok) {
      const text = await notionRes.text();
      console.error('[notion] /databases/query failed', notionRes.status, text);
      return res.status(500).json({ error: 'Failed to fetch projects' });
    }

    const data: NotionDatabaseQueryResponse = await notionRes.json();
    const projects = (data.results ?? []).map(toProject).filter(isProject);

    setCdnCache(res, 600, 86400);

    return res.status(200).json(projects);
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : 'Unknown error';
    return res.status(500).json({ error: message });
  }
}
