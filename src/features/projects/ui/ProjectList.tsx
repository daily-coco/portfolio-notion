import type { Project } from '../../../shared/types/project';
import { Link } from 'react-router-dom';
import Card from '../../../shared/ui/Card/Card';
import * as s from './ProjectList.css';

type Props = {
  projects: Project[];
};
const CARD_TAG_VIEW = 3;

export default function ProjectList({ projects }: Props) {
  if (projects.length === 0)
    return <div className={s.empty}>프로젝트 검색 결과가 없습니다.</div>;

  return (
    <>
      <ul className={s.grid}>
        {projects.map((p, index) => {
          const visibleTags = p.tags.slice(0, CARD_TAG_VIEW);
          const hiddenTagCount = p.tags.length - CARD_TAG_VIEW;
          return (
            <li
              key={p.slug}
              data-reveal='up'
              data-reveal-delay={String((index % 3) * 0.08)}
            >
              <Link className={s.link} to={`/projects/${p.slug}`}>
                <Card interactive className={s.cardInner}>
                  {p.thumbnailUrl ? (
                    <figure className={s.figure}>
                      <img
                        src={p.thumbnailUrl}
                        alt={`${p.title} 썸네일`}
                        className={s.thumb}
                      />
                    </figure>
                  ) : null}
                  <strong className={s.title}>{p.title}</strong>
                  <span className={s.date}>
                    {p.startDate ?? '—'} {p.endDate ? `~ ${p.endDate}` : ''}
                  </span>

                  {p.tags.length > 0 ? (
                    <div className={s.cardTagsWrap}>
                      <ul className={s.cardTagsList}>
                        {visibleTags.map((t) => (
                          <li key={t} className={s.cardTagsTag}>
                            {t}
                          </li>
                        ))}
                      </ul>
                      {hiddenTagCount > 0 ? (
                        <sup className={s.cardTagsMore}>+{hiddenTagCount}</sup>
                      ) : null}
                    </div>
                  ) : null}

                  {p.projectName ? (
                    <div className={s.summary}>{p.projectName}</div>
                  ) : null}
                </Card>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
