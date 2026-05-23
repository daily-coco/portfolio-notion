import { Link } from 'react-router-dom';
import Card from '../../../shared/ui/Card/Card';
import * as s from './ProjectList.css';
import type { Project } from '../../../shared/types/project';
import ProjectCardTags from './ProjectCardTags';
type CardProps = {
  data: Project;
};

export default function ProjectCard({ data }: CardProps) {
  return (
    <>
      <Link className={s.link} to={`/projects/${data.slug}`}>
        <Card interactive className={s.cardInner}>
          {data.thumbnailUrl ? (
            <figure className={s.figure}>
              <img src={data.thumbnailUrl} alt={`${data.title} 썸네일`} className={s.thumb} />
            </figure>
          ) : null}
          <strong className={s.title}>{data.title}</strong>
          <span className={s.date}>
            {data.startDate ?? '—'} {data.endDate ? `~ ${data.endDate}` : ''}
          </span>

          {data.tags.length > 0 ? <ProjectCardTags tags={data.tags} /> : null}

          {data.projectName ? <div className={s.summary}>{data.projectName}</div> : null}
        </Card>
      </Link>
    </>
  );
}
