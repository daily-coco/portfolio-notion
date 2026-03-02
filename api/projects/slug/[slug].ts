// api/projects/slug/[slug].ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import { setCdnCache } from '../../_lib/cache';

const NOTION_TOKEN = process.env.NOTION_TOKEN!;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID!;
const NOTION_VERSION = '2022-06-28';

const notion = new Client({ auth: NOTION_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: notion });

const cache = new Map<string, { markdown: string; ts: number }>();
const TTL_MS = 1000 * 60 * 10;

function isValidSlug(slug: string) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const slug = (req.query.slug as string)?.trim();
    if (!slug) return res.status(400).json({ message: 'slug is required' });
    if (!isValidSlug(slug))
      return res.status(400).json({ message: 'invalid slug' });

    setCdnCache(res, 600, 86400);

    const hit = cache.get(slug);
    if (hit && Date.now() - hit.ts < TTL_MS) {
      return res.status(200).json({ slug, markdown: hit.markdown });
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
          page_size: 1,
          filter: {
            property: 'Slug',
            rich_text: { equals: slug },
          },
        }),
      }
    );

    if (!notionRes.ok) {
      const text = await notionRes.text();
      console.error('[notion] slug query failed', notionRes.status, text);
      return res.status(500).json({ message: 'failed' });
    }

    const data: any = await notionRes.json();
    const page = data.results?.[0];
    if (!page?.id) return res.status(404).json({ message: 'Not found' });

    const pageId = page.id;

    const mdBlocks = await n2m.pageToMarkdown(pageId);
    const markdown = n2m.toMarkdownString(mdBlocks).parent;

    cache.set(slug, { markdown, ts: Date.now() });

    return res.status(200).json({ slug, markdown });
  } catch (e: any) {
    console.error('[api/projects/slug] failed', e);
    return res.status(500).json({ message: 'failed' });
  }
}
