import type { Project } from '../features/projects/model/types';

export type ProjectContent = { slug: string; markdown: string };

export async function fetchProjects({ signal }: { signal?: AbortSignal } = {}) {
  const r = await fetch('/api/projects', { signal });
  if (!r.ok) throw new Error('failed to load projects');
  return (await r.json()) as Project[];
}

export async function fetchProjectContentBySlug(
  slug: string,
  { signal }: { signal?: AbortSignal } = {}
) {
  const r = await fetch(`/api/projects/slug/${slug}`, { signal });
  if (!r.ok) throw new Error('failed to load project content');
  return (await r.json()) as ProjectContent;
}
