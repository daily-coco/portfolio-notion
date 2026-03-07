import { useQuery } from '@tanstack/react-query';
import type { Project } from '../shared/types/project';
import { sortProjectsNewestFirst } from '../features/projects/lib/sortProjects';
import { fetchProjects } from '../api/projects.client';

export function useProjects() {
  return useQuery({
    queryKey: ['projects'],
    queryFn: ({ signal }): Promise<Project[]> => fetchProjects({ signal }),
    select: (projects) => sortProjectsNewestFirst(projects),
    staleTime: 1000 * 60 * 5,
  });
}
