import type { Project } from '../../../shared/types/project';

function toTime(d?: string) {
  if (!d) return null;
  const t = Date.parse(d); // Notion date (YYYY-MM-DD)면 정상
  return Number.isFinite(t) ? t : null;
}

export function sortProjectsNewestFirst(projects: Project[]) {
  return [...projects].sort((a, b) => {
    const aEnd = toTime(a.endDate);
    const bEnd = toTime(b.endDate);
    const aStart = toTime(a.startDate);
    const bStart = toTime(b.startDate);

    // 1) endDate desc (없으면 뒤로)
    if (aEnd !== bEnd) {
      if (aEnd === null) return 1;
      if (bEnd === null) return -1;
      return bEnd - aEnd;
    }

    // 2) startDate desc (없으면 뒤로)
    if (aStart !== bStart) {
      if (aStart === null) return 1;
      if (bStart === null) return -1;
      return bEnd === null && aEnd === null ? bStart - aStart : bStart - aStart;
    }

    // 3) 안정 정렬
    return (a.title ?? '').localeCompare(b.title ?? '', 'ko');
  });
}
