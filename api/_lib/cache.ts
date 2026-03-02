// api/_lib/cache.ts
import type { VercelResponse } from '@vercel/node';

export function setCdnCache(
  res: VercelResponse,
  sMaxAgeSeconds: number,
  swrSeconds: number
) {
  res.setHeader(
    'Cache-Control',
    `s-maxage=${sMaxAgeSeconds}, stale-while-revalidate=${swrSeconds}`
  );
}
