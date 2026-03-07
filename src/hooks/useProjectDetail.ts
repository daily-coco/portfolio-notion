import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useQueryClient } from '@tanstack/react-query';

import { useProjects } from './useProjects';
import { useProjectContentBySlug } from './useProjectContentBySlug';

import { fetchProjectContentBySlug } from '../features/projects/api/fetchProjectContentBySlug';
import { projectKeys } from '../features/projects/api/projectKeys';
import { canPrefetchOnConnection } from '../features/projects/lib/canPrefetchOnConnection';

export function useProjectDetail(slug?: string) {
  const queryClient = useQueryClient();
  const hoverTimer = useRef<number | null>(null);

  const {
    data: projects = [],
    isLoading,
    isError,
    error,
    refetch: refetchProjects,
  } = useProjects();

  const project = useMemo(
    () => projects.find((p) => p.slug === slug),
    [projects, slug]
  );

  const {
    data: content,
    isLoading: isContentLoading,
    isError: isContentError,
    refetch: refetchContent,
    isFetching: isContentFetching,
  } = useProjectContentBySlug(slug);

  const currentIndex = useMemo(
    () => projects.findIndex((p) => p.slug === slug),
    [projects, slug]
  );

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : undefined;
  const nextProject =
    currentIndex >= 0 && currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : undefined;

  const prefetchContent = useCallback(
    (targetSlug?: string) => {
      if (!targetSlug) return;

      const queryKey = projectKeys.content(targetSlug);
      const cached = queryClient.getQueryData(queryKey);
      if (cached) return;

      queryClient.prefetchQuery({
        queryKey,
        queryFn: ({ signal }) => fetchProjectContentBySlug(targetSlug, signal),
        staleTime: 1000 * 60 * 30,
      });
    },
    [queryClient]
  );
  const onHoverPrefetch = useCallback(
    (targetSlug?: string) => {
      if (!targetSlug) return;
      if (!canPrefetchOnConnection()) return;

      if (hoverTimer.current) {
        window.clearTimeout(hoverTimer.current);
      }

      hoverTimer.current = window.setTimeout(() => {
        prefetchContent(targetSlug);
      }, 200);
    },
    [prefetchContent]
  );

  const onLeavePrefetch = useCallback(() => {
    if (hoverTimer.current) {
      window.clearTimeout(hoverTimer.current);
    }
  }, []);

  useEffect(() => {
    prefetchContent(prevProject?.slug);
    prefetchContent(nextProject?.slug);
  }, [prevProject?.slug, nextProject?.slug, prefetchContent]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [slug]);

  useEffect(() => {
    return () => {
      if (hoverTimer.current) {
        window.clearTimeout(hoverTimer.current);
      }
    };
  }, []);

  return {
    project,
    content,
    isLoading,
    isError,
    error,
    refetchProjects,
    isContentLoading,
    isContentError,
    refetchContent,
    isContentFetching,
    prevProject,
    nextProject,
    onHoverPrefetch,
    onLeavePrefetch,
  };
}
