import { Button } from '../../../../shared/ui/Button/Button';
import type { Project } from '../../../../shared/types/project';
import { ArrowBigLeftDash, ArrowBigRightDash } from 'lucide-react';

import * as s from '../../../../pages/ProjectDetailPage.css';
import * as a11y from '../../../../styles/a11y.css';

type Props = {
  prevProject?: Project;
  nextProject?: Project;
  isFetching: boolean;
  onHoverPrefetch: (slug?: string) => void;
  onLeavePrefetch: () => void;
  onNavigate: (path: string) => void;
};

export default function ProjectDetailNav({
  prevProject,
  nextProject,
  isFetching,
  onHoverPrefetch,
  onLeavePrefetch,
  onNavigate,
}: Props) {
  const isPrevDisabled = isFetching || !prevProject;
  const isNextDisabled = isFetching || !nextProject;

  return (
    <nav className={s.navRow} aria-label='프로젝트 이전 다음 글 이동'>
      {prevProject ? (
        <Button
          variant='ghost'
          disabled={isPrevDisabled}
          onMouseEnter={() => onHoverPrefetch(prevProject.slug)}
          onMouseLeave={onLeavePrefetch}
          onClick={() => {
            if (!prevProject) return;
            onNavigate(`/projects/${prevProject.slug}`);
          }}
          className={s.pageNavButton}
        >
          <span className={a11y.srOnly}>
            {prevProject ? `이전 프로젝트 글` : '이전 글 없음'}
          </span>
          <ArrowBigLeftDash />
          <span className={s.pageNavText}>{prevProject.title}</span>
        </Button>
      ) : null}

      {nextProject ? (
        <Button
          variant='ghost'
          disabled={isNextDisabled}
          onMouseEnter={() => onHoverPrefetch(nextProject.slug)}
          onMouseLeave={onLeavePrefetch}
          onClick={() => {
            if (!nextProject) return;
            onNavigate(`/projects/${nextProject.slug}`);
          }}
          className={s.pageNavButton}
        >
          <span className={a11y.srOnly}>
            {nextProject ? `다음 프로젝트 글` : '다음 글 없음'}
          </span>
          <span className={s.pageNavText}>{nextProject.title}</span>
          <ArrowBigRightDash />
        </Button>
      ) : null}
    </nav>
  );
}
