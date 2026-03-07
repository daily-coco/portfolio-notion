import { useNavigate, useParams } from 'react-router-dom';
import { useProjectDetail } from '../hooks/useProjectDetail';
import RouteTransition from '../shared/ui/RouteTransition';
import EmptyState from '../features/projects/ui/Status/EmptyState';
import ProjectDetailHeader from '../features/projects/ui/detail/ProjectDetailHeader';
import ProjectDetailNav from '../features/projects/ui/detail/ProjectDetailPostNav';
import ProjectDetailContent from '../features/projects/ui/detail/ProjectDetailContent';

import { Button } from '../shared/ui/Button/Button';
import * as s from './ProjectDetailPage.css';
import ErrorState from '../features/projects/ui/Status/ErrorState';
import ContentSkeleton from '../features/projects/ui/ContentSkeleton';

export default function ProjectDetailPage() {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

  const {
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
  } = useProjectDetail(slug);

  if (isLoading) {
    return <ContentSkeleton />;
  }

  if (isError) {
    return (
      <article className={s.page}>
        <ErrorState
          message={
            (error as Error)?.message ?? '알 수 없는 오류가 발생했습니다.'
          }
          onRetry={refetchProjects}
        />
        <div style={{ marginTop: 12 }}>
          <Button variant='ghost' onClick={() => navigate('/')}>
            목록으로
          </Button>
        </div>
      </article>
    );
  }

  if (!project) {
    return (
      <article className={s.page}>
        <EmptyState
          title='프로젝트를 찾을 수 없어요'
          message='잘못된 접근이거나 삭제된 프로젝트입니다.'
          actionLabel='목록으로'
          onAction={() => navigate('/', { replace: true })}
        />
      </article>
    );
  }

  return (
    <RouteTransition>
      {/* slug 변경 시 상세 트리를 재마운트해서 전환 애니메이션/스크롤 초기화를 안정적으로 적용 */}
      <article key={slug} className={s.page}>
        <div className={s.backRow}>
          <Button variant='ghost' onClick={() => navigate(-1)}>
            ← 뒤로가기
          </Button>
          <Button variant='ghost' onClick={() => navigate('/')}>
            목록으로
          </Button>
        </div>

        <ProjectDetailHeader project={project} />

        <ProjectDetailContent
          markdown={content?.markdown}
          isLoading={isContentLoading}
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
      </article>
    </RouteTransition>
  );
}
