import { useEffect, useMemo, useRef, useState } from 'react';
import type { CompositionEventHandler } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useDebouncedValue } from './useDebouncedValue';
import type { Project, SortKey } from '../features/projects/model/types';
import {
  filterProjects,
  getAllTags,
  sortProjects,
} from '../features/projects/model/projectSelectors';

function parseTags(raw: string | null) {
  return raw
    ? raw
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
    : [];
}

export function useProjectFilters(projects: Project[]) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [q, setQ] = useState(() => searchParams.get('q') ?? '');
  const [selectedTags, setSelectedTags] = useState<string[]>(() =>
    parseTags(searchParams.get('tags'))
  );
  const [sortKey, setSortKey] = useState<SortKey>(() => {
    const v = searchParams.get('sort') as SortKey | null;
    return v ?? 'date_desc';
  });

  const debouncedQ = useDebouncedValue(q, 300);

  // ✅ IME 조합 상태는 ref가 더 안정적 (렌더 안 일으킴)
  const composingRef = useRef(false);
  const onSearchCompositionStart: CompositionEventHandler<
    HTMLInputElement
  > = () => {
    composingRef.current = true;
  };
  const onSearchCompositionEnd: CompositionEventHandler<
    HTMLInputElement
  > = () => {
    composingRef.current = false;
  };

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
    // ✅ 조합 중이면 URL 업데이트 금지
    if (composingRef.current) return;

    const next = new URLSearchParams();

    const nextQ = debouncedQ.trim();
    if (nextQ) next.set('q', nextQ);

    if (sortKey !== 'date_desc') next.set('sort', sortKey);

    if (selectedTags.length > 0) next.set('tags', selectedTags.join(','));

    const nextString = next.toString();
    const currentString = searchParams.toString();
    if (nextString === currentString) return;

    navigate(
      {
        pathname: location.pathname,
        search: nextString ? `?${nextString}` : '',
        hash: location.hash,
      },
      { replace: true }
    );
  }, [
    debouncedQ,
    sortKey,
    selectedTags,
    searchParams,
    navigate,
    location.pathname,
    location.hash,
  ]);

  return {
    q,
    selectedTags,
    sortKey,

    setQ,
    setSortKey,
    toggleTag,
    clearFilters,

    filtered,
    allTags,

    onSearchCompositionStart,
    onSearchCompositionEnd,
  };
}
