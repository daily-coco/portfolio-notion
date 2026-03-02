import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { useProjects } from '../hooks/useProjects';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import Card from '../shared/ui/Card/Card';
import { Button } from '../shared/ui/Button/Button';

import Skeleton from '../features/projects/ui/Skeleton';
import ErrorState from '../features/projects/ui/Status/ErrorState';
import EmptyState from '../features/projects/ui/Status/EmptyState';

import LazyImg from '../shared/ui/LazyImg';
import ContentSkeleton from '../features/projects/ui/ContentSkeleton';

import * as s from './ProjectDetailPage.css';
import RouteTransition from '../shared/ui/RouteTransition';
import { useProjectContentBySlug } from '../hooks/useProjectContentBySlug';

export default function ProjectDetailPage() {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { slug } = useParams<{ slug: string }>();
  const {
    data: projects = [],
    isLoading,
    isError,
    error,
    refetch,
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

  const hoverTimer = useRef<number | null>(null);

  const prefetchContent = useCallback(
    (targetSlug?: string) => {
      if (!targetSlug) return;

      const cached = queryClient.getQueryData(['projectContent', targetSlug]);
      if (cached) return;

      queryClient.prefetchQuery({
        queryKey: ['projectContent', targetSlug],
        queryFn: ({ signal }) =>
          fetch(`/api/projects/slug/${targetSlug}`, { signal }).then((r) => {
            if (!r.ok) throw new Error('Failed to prefetch content');
            return r.json();
          }),
        staleTime: 1000 * 60 * 30,
      });
    },
    [queryClient]
  );
  const onHoverPrefetch = (targetSlug?: string) => {
    if (!targetSlug) return;

    const conn = (navigator as any).connection;
    const saveData = !!conn?.saveData;
    const slow = ['slow-2g', '2g'].includes(conn?.effectiveType);
    if (saveData || slow) return;

    if (hoverTimer.current) window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => {
      prefetchContent(targetSlug);
    }, 200);
  };

  const onLeave = () => {
    if (hoverTimer.current) window.clearTimeout(hoverTimer.current);
  };

  const currentIndex = useMemo(
    () => projects.findIndex((p) => p.slug === slug),
    [projects, slug]
  );

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : undefined;
  const nextProject =
    currentIndex >= 0 && currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : undefined;

  useEffect(() => {
    prefetchContent(prevProject?.slug);
    prefetchContent(nextProject?.slug);
  }, [prevProject?.slug, nextProject?.slug, prefetchContent]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [slug]);

  if (isLoading && projects.length === 0) {
    return (
      <div className={s.page}>
        <Skeleton height={28} width={200} />
        <Skeleton height={16} width={120} />
        <Skeleton height={200} />
      </div>
    );
  }

  if (isError) {
    return (
      <div className={s.page}>
        <ErrorState
          message={(error as Error)?.message ?? '알 수 없는 오류'}
          onRetry={() => refetch()}
        />
        <div style={{ marginTop: 12 }}>
          <Button variant='ghost' onClick={() => navigate('/')}>
            목록으로
          </Button>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className={s.page}>
        <EmptyState
          title='프로젝트를 찾을 수 없어요'
          message='잘못된 접근이거나 삭제된 프로젝트입니다.'
          actionLabel='목록으로'
          onAction={() => navigate('/', { replace: true })}
        />
      </div>
    );
  }
  return (
    <RouteTransition>
      <div key={slug} className={s.page}>
        <div className={s.backRow}>
          <Button variant='ghost' onClick={() => navigate(-1)}>
            ← 뒤로가기
          </Button>
          <Button variant='ghost' onClick={() => navigate('/')}>
            목록으로
          </Button>
        </div>
        {project.thumbnailUrl ? (
          <img
            src={project.thumbnailUrl}
            alt={`${project.title} 썸네일`}
            className={s.thumb}
          />
        ) : null}
        {project.summary ? (
          <p className={s.summary}>{project.summary}</p>
        ) : null}

        <h1 className={s.title}>{project.title}</h1>

        <div className={s.meta}>
          {project.startDate ?? '—'}{' '}
          {project.endDate ? `~ ${project.endDate}` : ''}
        </div>
        {project.tags.length > 0 ? (
          <div className={s.tags}>
            {project.tags.map((t) => (
              <span key={t} className={s.tag}>
                {t}
              </span>
            ))}
          </div>
        ) : null}

        {project.url ? (
          <Button
            as='a'
            href={project.url}
            target='_blank'
            rel='noreferrer'
            variant='primary'
            title='새창열림'
          >
            프로젝트 Real URL
          </Button>
        ) : null}

        {/* Notion Page Content -- Start */}
        <div className={s.contentWrap}>
          <Card padding='md'>
            <div className={s.contentCard}>
              {isContentLoading ? (
                <ContentSkeleton lines={12} />
              ) : isContentError ? (
                <div style={{ display: 'grid', gap: 10 }}>
                  <ErrorState
                    title='본문을 불러오지 못했어요'
                    onRetry={() => refetchContent?.()}
                  />
                </div>
              ) : (
                <article className={s.markdown}>
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      img: (props) => <LazyImg {...props} />,
                      a: (props) => (
                        <a {...props} target='_blank' rel='noreferrer' />
                      ),
                      table: ({ ...props }) => (
                        <div className={s.tableScroll}>
                          <table {...props} />
                        </div>
                      ),
                    }}
                  >
                    {content?.markdown ?? ''}
                  </ReactMarkdown>
                </article>
              )}
            </div>
          </Card>
        </div>
        {/* Notion Page Content -- End */}

        <div className={s.navRow}>
          {prevProject ? (
            <Button
              variant='ghost'
              disabled={isContentFetching}
              onMouseEnter={() => onHoverPrefetch(prevProject.slug)}
              onMouseLeave={onLeave}
              onClick={() => navigate(`/projects/${prevProject.slug}`)}
            >
              {isContentFetching
                ? '이동 중...'
                : `← 이전: ${prevProject.title}`}
            </Button>
          ) : (
            <span className={s.dim}>← 이전 없음</span>
          )}

          {nextProject ? (
            <Button
              variant='ghost'
              disabled={isContentFetching}
              onMouseEnter={() => onHoverPrefetch(nextProject.slug)}
              onMouseLeave={onLeave}
              onClick={() => navigate(`/projects/${nextProject.slug}`)}
            >
              {isContentFetching ? '이동 중...' : `다음: ${nextProject.title}→`}
            </Button>
          ) : (
            <span className={s.dim}>다음 없음 →</span>
          )}
        </div>
      </div>
    </RouteTransition>
  );
}
