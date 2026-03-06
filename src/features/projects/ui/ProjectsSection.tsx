import { useProjectFilters } from '../../../hooks/useProjectFilters';
import { useProjects } from '../../../hooks/useProjects';
import ProjectList from './ProjectList';
import ProjectsToolbar from './ProjectsToolbar';
import EmptyState from './Status/EmptyState';
import ErrorState from './Status/ErrorState';
import TagFilter from './TagFilter';

import * as s from './ProjectsSection.css';
import ProjectsSectionSkeleton from './ProjectsSectionSkeleton';

type Props = {
  title?: string;
  showHeader?: boolean; // 원페이지에서는 제목 숨기고 싶을 때 사용
};

export default function ProjectsSection({
  title = '프로젝트',
  showHeader = true,
}: Props) {
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

  if (isLoading && projects.length === 0) {
    return <ProjectsSectionSkeleton showHeader={showHeader} />;
  }

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
    <div className={s.section}>
      {showHeader ? (
        <div className={s.header}>
          <h2 className={s.title}>{title}</h2>
          <div className={s.meta}>
            조회 : {filtered.length} / 전체 : {projects.length}
            {isFetching ? <span>업데이트 중…</span> : null}
          </div>
        </div>
      ) : null}

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
  );
}
