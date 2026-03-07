import { Button } from '../../../../shared/ui/Button/Button';
import type { Project } from '../../../../shared/types/project';

import * as s from '../../../../pages/ProjectDetailPage.css';

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
  return (
    <div className={s.navRow}>
      {prevProject ? (
        <Button
          variant='ghost'
          disabled={isFetching}
          onMouseEnter={() => onHoverPrefetch(prevProject.slug)}
          onMouseLeave={onLeavePrefetch}
          onClick={() => onNavigate(`/projects/${prevProject.slug}`)}
        >
          ← 이전: {prevProject.title}
        </Button>
      ) : (
        <span className={s.dim}>← 이전 없음</span>
      )}

      {nextProject ? (
        <Button
          variant='ghost'
          disabled={isFetching}
          onMouseEnter={() => onHoverPrefetch(nextProject.slug)}
          onMouseLeave={onLeavePrefetch}
          onClick={() => onNavigate(`/projects/${nextProject.slug}`)}
        >
          다음: {nextProject.title}→
        </Button>
      ) : (
        <span className={s.dim}>다음 없음 →</span>
      )}
    </div>
  );
}
