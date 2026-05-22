import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProjectDetail } from '../hooks/useProjectDetail';

import ProjectDetailHeader from '../features/projects/ui/detail/ProjectDetailHeader';
import ProjectDetailNav from '../features/projects/ui/detail/ProjectDetailPostNav';
import ProjectDetailContent from '../features/projects/ui/detail/ProjectDetailContent';

import EmptyState from '../features/projects/ui/Status/EmptyState';
import ErrorState from '../features/projects/ui/Status/ErrorState';
import ContentSkeleton from '../features/projects/ui/ContentSkeleton';

import { Button } from '../shared/ui/Button/Button';
import * as s from './ProjectDetailPage.css';

export default function ProjectDetailPage() {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

  const {
    project,
    content,
    isInitialLoading,
    isError,
    error,
    refetchProjects,
    isContentError,
    refetchContent,
    isContentFetching,
    prevProject,
    nextProject,
    onHoverPrefetch,
    onLeavePrefetch,
  } = useProjectDetail(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [slug]);

  if (isInitialLoading) {
    return (
      <article className={s.detailPageWrap}>
        <div className={s.detailPageInner}>
          <ContentSkeleton />
        </div>
      </article>
    );
  }

  if (isError) {
    return (
      <article className={s.detailPageWrap}>
        <div className={s.detailPageInner}>
          <ErrorState
            message={(error as Error)?.message ?? '알 수 없는 오류가 발생했습니다.'}
            onRetry={refetchProjects}
          />
          <div className={s.pageListButton}>
            <Button variant='ghost' onClick={() => navigate('/')}>
              홈으로 이동하기
            </Button>
          </div>
        </div>
      </article>
    );
  }

  if (!project) {
    return (
      <article className={s.detailPageWrap}>
        <div className={s.detailPageInner}>
          <EmptyState
            title='프로젝트를 찾을 수 없어요'
            message='잘못된 접근이거나 삭제된 프로젝트입니다.'
            actionLabel='목록으로'
            onAction={() => navigate('/', { replace: true })}
          />
        </div>
      </article>
    );
  }

  return (
    <article className={s.detailPageWrap}>
      <div className={s.detailPageInner}>
        <ProjectDetailHeader project={project} />

        <ProjectDetailContent
          markdown={content?.markdown}
          isLoading={false}
          isError={isContentError}
          onRetry={refetchContent}
        />

        <ProjectDetailNav
          prevProject={prevProject}
          nextProject={nextProject}
          isFetching={isContentFetching}
          onHoverPrefetch={onHoverPrefetch}
          onLeavePrefetch={onLeavePrefetch}
          onNavigate={navigate}
        />
      </div>
    </article>
  );
}
