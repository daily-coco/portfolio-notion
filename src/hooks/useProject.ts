import { useQuery } from '@tanstack/react-query';
import { fetchProjects } from '../api/projects.client';
import type { Project } from '../shared/types/project';
import { sortProjectsNewestFirst } from '../features/projects/lib/sortProjects';

export function useProject() {
  return useQuery({
    queryKey: ['projects'],
    queryFn: ({ signal }): Promise<Project[]> => fetchProjects({ signal }),
    select: (projects) => sortProjectsNewestFirst(projects),
    staleTime: 1000 * 60 * 5,
  });
}
