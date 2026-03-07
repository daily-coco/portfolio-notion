import type { Project } from '../../../../shared/types/project';

import * as s from '../../../../pages/ProjectDetailPage.css';
import * as a11y from '../../../../styles/a11y.css';
import { Button } from '../../../../shared/ui/Button/Button';

type Props = {
  project: Project;
};

export default function ProjectDetailHeader({ project }: Props) {
  return (
    <>
      {project.thumbnailUrl ? (
        <figure>
          <img
            src={project.thumbnailUrl}
            alt={`${project.title} 대표 썸네일`}
            className={s.thumb}
          />
        </figure>
      ) : null}

      <h1 className={s.title}>{project.title}</h1>
      {project.projectName ? (
        <h2 className={s.summary}>
          <span className={a11y.srOnly}>프로젝트명:</span>
          {project.projectName}
        </h2>
      ) : null}

      <time className={s.meta}>
        <span className={a11y.srOnly}>작업 기간 :</span>
        {project.startDate ?? '—'}{' '}
        {project.endDate ? `~ ${project.endDate}` : ''}
      </time>

      {project.tags.length > 0 ? (
        <div className={s.tags}>
          <em className={a11y.srOnly}>작업 관련 키워드</em>
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
          프로젝트 실운영 URL
        </Button>
      ) : null}
    </>
  );
}
