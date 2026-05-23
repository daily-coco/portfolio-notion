import type { Project } from '../../../shared/types/project';
import ProjectCard from './ProjectCard';
import * as s from './ProjectList.css';

type Props = {
  projects: Project[];
};

export default function ProjectList({ projects }: Props) {
  if (projects.length === 0) return <div className={s.empty}>프로젝트 검색 결과가 없습니다.</div>;

  return (
    <>
      <ul className={s.grid}>
        {projects.map((p, index) => {
          return (
            <li key={p.slug} data-reveal='up' data-reveal-delay={String((index % 3) * 0.08)}>
              <ProjectCard data={p} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
