import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebouncedValue } from './useDebouncedValue';
import type { Project } from '../features/projects/model/types';
import {
  filterProjects,
  getAllTags,
  sortProjects,
} from '../features/projects/model/projectSelectors';

import type { SortKey } from '../features/projects/model/types';
export function useProjectFilters(projects: Project[]) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [q, setQ] = useState(() => searchParams.get('q') ?? '');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortKey, setSortKey] = useState<SortKey>(() => {
    const v = searchParams.get('sort') as SortKey | null;
    return v ?? 'date_desc';
  });

  const debouncedQ = useDebouncedValue(q, 300);

  const clearFilters = () => {
    setQ('');
    setSelectedTags([]);
    setSortKey('date_desc');
  };

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filtered = useMemo(() => {
    const filteredList = filterProjects(projects, {
      q: debouncedQ,
      selectedTags,
    });
    return sortProjects(filteredList, sortKey);
  }, [projects, debouncedQ, selectedTags, sortKey]);

  const allTags = useMemo(() => getAllTags(projects), [projects]);

  useEffect(() => {
    const next = new URLSearchParams(searchParams);

    //q
    if (q.trim()) next.set('q', debouncedQ.trim());
    else next.delete('q');

    // sort
    if (sortKey !== 'date_desc') next.set('sort', sortKey);
    else next.delete('sort');

    //tags
    if (selectedTags.length > 0) next.set('tags', selectedTags.join(','));
    else next.delete('tags');

    setSearchParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQ, sortKey, selectedTags, setSearchParams]);

  useEffect(() => {
    const nextQ = searchParams.get('q') ?? '';
    const nextSort =
      (searchParams.get('sort') as SortKey | null) ?? 'date_desc';
    const rawTags = searchParams.get('tags');
    const nextTags = rawTags
      ? rawTags
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean)
      : [];

    // 불필요한 setState 루프 방지
    if (nextQ !== q) setQ(nextQ);
    if (nextSort !== sortKey) setSortKey(nextSort);

    const smaeTags =
      nextTags.length === selectedTags.length &&
      nextTags.every((t, i) => t === selectedTags[i]);

    if (!smaeTags) setSelectedTags(nextTags);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return {
    // state
    q,
    selectedTags,
    sortKey,

    // setters/actions
    setQ,
    setSortKey,
    toggleTag,
    clearFilters,

    // derived
    filtered,
    allTags,
  };
}
