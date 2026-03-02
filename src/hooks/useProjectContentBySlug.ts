import { useQuery } from '@tanstack/react-query';
import { fetchProjectContentBySlug } from '../api/projects.client';

export function useProjectContentBySlug(slug?: string) {
  return useQuery({
    queryKey: ['projectContent', slug],
    queryFn: ({ signal }) => fetchProjectContentBySlug(slug!, { signal }),
    enabled: !!slug,
    staleTime: 1000 * 60 * 30,
  });
}
