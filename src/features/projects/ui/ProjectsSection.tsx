import { useProjectFilters } from '../../../hooks/useProjectFilters';
import { useProjects } from '../../../hooks/useProjects';
import ProjectList from './ProjectList';
import ProjectsToolbar from './ProjectsToolbar';
import EmptyState from './Status/EmptyState';
import ErrorState from './Status/ErrorState';
import TagFilter from './TagFilter';
import ProjectsSectionSkeleton from './ProjectsSectionSkeleton';
import clsx from 'clsx';

import * as s from './ProjectsSection.css';
import * as common from '../../../shared/styles/section.css';
import ScrollReveal from '../../../shared/animation/ui/ScrollReveal/ScrollReveal';

type Props = {
  id: string;
  className?: string;
  title?: string;
  showHeader?: boolean;
};

export default function ProjectsSection({
  title = '프로젝트 이력 리스트',
  showHeader = true,
  id,
  className,
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
    onSearchCompositionStart,
    onSearchCompositionEnd,
  } = useProjectFilters(projects);

  const renderContent = () => {
    if (isLoading && projects.length === 0) {
      return <ProjectsSectionSkeleton showHeader={showHeader} />;
    }

    if (isError) {
      return (
        <ErrorState
          message={
            (error as Error)?.message ?? '알 수 없는 오류가 발생했습니다.'
          }
          onRetry={() => refetch()}
        />
      );
    }

    if (projects.length === 0) {
      return (
        <div data-reveal='up'>
          <EmptyState
            title='아직 등록된 프로젝트가 없습니다.'
            message='Notion DB를 확인해 주세요.'
          />
        </div>
      );
    }

    return (
      <div
        className={s.projectsInner}
        data-reveal='up'
        data-reveal-delay='0.08'
      >
        {showHeader ? (
          <div className={s.header} data-reveal='up'>
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
          onCompositionStart={onSearchCompositionStart}
          onCompositionEnd={onSearchCompositionEnd}
        />

        <TagFilter
          tags={allTags}
          selectedTags={selectedTags}
          onToggleTag={toggleTag}
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
      </div>
    );
  };

  return (
    <ScrollReveal
      as='section'
      id={id}
      className={clsx(common.sectionBase, s.section, className)}
      start='top 78%'
      once={true}
      refreshKey={isLoading ? 'loading' : 'loaded'}
    >
      {renderContent()}
    </ScrollReveal>
  );
}
