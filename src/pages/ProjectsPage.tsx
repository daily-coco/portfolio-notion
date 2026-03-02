import { useProjects } from '../hooks/useProjects';

import ProjectList from '../features/projects/ui/ProjectList';
import TagFilter from '../features/projects/ui/TagFilter';
import ProjectsToolbar from '../features/projects/ui/ProjectsToolbar';
import Skeleton from '../features/projects/ui/Skeleton';
import { useProjectFilters } from '../hooks/useProjectFilters';
import ErrorState from '../features/projects/ui/Status/ErrorState';
import EmptyState from '../features/projects/ui/Status/EmptyState';

import * as s from './ProjectsPage.css';
import RouteTransition from '../shared/ui/RouteTransition';
export default function ProjectsPage() {
  const {
    data: projects = [],
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useProjects();
  const {
    q,
    setQ,
    sortKey,
    setSortKey,
    selectedTags,
    toggleTag,
    clearFilters,
    filtered,
    allTags,
  } = useProjectFilters(projects);

  if (isLoading && projects.length === 0)
    return (
      <div className={s.loadingWrap}>
        <div className={s.skTitleBlock}>
          <Skeleton height={28} width={180} />
          <Skeleton height={14} width={120} />
        </div>

        <div className={s.skToolbarRow}>
          <Skeleton height={32} width={140} />
          <Skeleton height={32} width={80} />
          <Skeleton height={32} width={220} />
        </div>

        <div className={s.skListBlock}>
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} height={18} />
          ))}
        </div>

        <div className={s.skTagsRow}>
          {Array.from({ length: 10 }).map((_, i) => (
            <Skeleton key={i} height={30} width={80} radius={999} />
          ))}
        </div>
      </div>
    );

  if (isError) {
    return (
      <ErrorState
        message={(error as Error)?.message ?? '알 수 없는 오류'}
        onRetry={() => refetch()}
      />
    );
  }

  if (projects.length === 0) {
    return (
      <EmptyState
        title='아직 등록된 프로젝트가 없어요'
        message='Notion DB를 확인해 주세요.'
      />
    );
  }

  return (
    <RouteTransition>
      <div className={s.page}>
        <div className={s.header}>
          <h1 className={s.title}>Projects</h1>
          <div className={s.meta}>
            {filtered.length} / {projects.length}
            {isFetching ? (
              <span style={{ marginLeft: 8 }}>· 업데이트 중…</span>
            ) : null}
          </div>
        </div>
        <ProjectsToolbar
          q={q}
          onChangeQ={setQ}
          sortKey={sortKey}
          onChangeSortKey={setSortKey}
          onClear={clearFilters}
        />
        {filtered.length === 0 ? (
          <EmptyState
            title='조건에 맞는 프로젝트가 없어요'
            message='필터를 초기화하거나 검색어를 바꿔보세요.'
            actionLabel='필터 초기화'
            onAction={clearFilters}
          />
        ) : (
          <ProjectList projects={filtered} />
        )}
        <TagFilter
          tags={allTags}
          selectedTags={selectedTags}
          onToggleTag={toggleTag}
        />
      </div>
    </RouteTransition>
  );
}
