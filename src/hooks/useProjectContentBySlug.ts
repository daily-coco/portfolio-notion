import { useQuery } from '@tanstack/react-query';
import { fetchProjectContentBySlug } from '../features/projects/api/fetchProjectContentBySlug';
import { projectKeys } from '../features/projects/api/projectKeys';

export function useProjectContentBySlug(slug?: string) {
  return useQuery({
    queryKey: projectKeys.content(slug),
    queryFn: ({ signal }) => fetchProjectContentBySlug(slug, signal),
    enabled: !!slug,
    staleTime: 1000 * 60 * 30,
  });
}
