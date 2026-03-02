import type { VercelRequest, VercelResponse } from '@vercel/node';
import { setCdnCache } from './_lib/cache';

const NOTION_TOKEN = process.env.NOTION_TOKEN!;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID!;
const NOTION_VERSION = '2022-06-28';

type Project = {
  slug: string;
  title: string;
  tags: string[];
  url?: string;
  startDate?: string;
  endDate?: string;
  thumbnailUrl?: string;
  summary?: string;
};

function getTitle(page: any): string {
  const prop = page.properties?.Name || page.properties?.Title;
  const arr = prop?.title ?? [];
  return arr.map((t: any) => t.plain_text).join('') || '(untitled)';
}

function getMultiSelect(page: any, key: string): string[] {
  const prop = page.properties?.[key];
  const arr = prop?.multi_select ?? [];
  return arr.map((x: any) => x.name);
}

function getUrl(page: any, key: string): string | undefined {
  return page.properties?.[key]?.url;
}

function getDateRange(page: any, key: string) {
  const d = page.properties?.[key]?.date;
  return {
    startDate: d?.start ?? undefined,
    endDate: d?.end ?? undefined,
  };
}

function getRichText(page: any, key: string): string | undefined {
  const prop = page.properties?.[key];
  if (!prop || prop.type !== 'rich_text') return undefined;
  return (
    (prop.rich_text ?? []).map((t: any) => t.plain_text).join('') || undefined
  );
}

function parseSlug(raw?: string) {
  const s = (raw ?? '').trim();
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(s)) return undefined;
  return s;
}

function getText(page: any, key: string): string | undefined {
  const prop = page.properties?.[key];
  if (!prop) return undefined;

  if (prop.type === 'rich_text') {
    return (
      (prop.rich_text ?? []).map((t: any) => t.plain_text).join('') || undefined
    );
  }
  if (prop.type === 'title') {
    return (
      (prop.title ?? []).map((t: any) => t.plain_text).join('') || undefined
    );
  }
  return undefined;
}

function getFilesFirstUrl(page: any, propertyName: string): string | undefined {
  const prop = page?.properties?.[propertyName];
  if (!prop || prop.type !== 'files') return undefined;

  const file = prop.files?.[0];
  if (!file) return undefined;
  if (file.type === 'external') return file.external?.url;
  if (file.type === 'file') return file.file?.url;
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

    const data = await notionRes.json();

    const projects: Project[] = (data.results ?? [])
      .map((page: any) => {
        const { startDate, endDate } = getDateRange(page, '작업기간');
        const slug = parseSlug(getRichText(page, 'Slug'));
        if (!slug) return null;

        return {
          slug,
          title: getTitle(page),
          tags: getMultiSelect(page, '관련태그'),
          url: getUrl(page, 'URL'),
          startDate,
          endDate,
          summary: getText(page, '프로젝트명'),
          thumbnailUrl: getFilesFirstUrl(page, 'Thumbnail'),
        };
      })
      .filter(Boolean) as Project[];

    setCdnCache(res, 600, 86400);

    return res.status(200).json(projects);
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? 'Unknown error' });
  }
}
