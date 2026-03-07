import type { Project, SortKey } from '../../../shared/types/project';

function toTime(date?: string) {
  if (!date) return 0;
  const t = new Date(date).getTime();
  return Number.isFinite(t) ? t : 0;
}

export function getAllTags(projects: Project[]) {
  const set = new Set<string>();
  for (const p of projects) for (const t of p.tags) set.add(t);
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

export function filterProjects(
  projects: Project[],
  params: { q: string; selectedTags: string[] }
) {
  const keyword = params.q.trim().toLowerCase();
  const { selectedTags } = params;

  return projects.filter((p) => {
    const matchesKeyword =
      keyword.length === 0 ||
      p.title.toLowerCase().includes(keyword) ||
      p.tags.some((t) => t.toLowerCase().includes(keyword));

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => p.tags.includes(tag));

    return matchesKeyword && matchesTags;
  });
}

export function sortProjects(projects: Project[], sortKey: SortKey) {
  const list = [...projects];

  list.sort((a, b) => {
    if (sortKey === 'title_asc') return a.title.localeCompare(b.title);

    const ad = toTime(a.startDate);
    const bd = toTime(b.startDate);

    if (sortKey === 'date_asc') return ad - bd;
    return bd - ad;
  });
  return list;
}
