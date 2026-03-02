import type { Project } from '../model/types';
import { Link } from 'react-router-dom';
import Card from '../../../shared/ui/Card/Card';
import * as s from './ProjectList.css';

type Props = {
  projects: Project[];
};

export default function ProjectList({ projects }: Props) {
  if (projects.length === 0)
    return <div className={s.empty}>결과가 없습니다.</div>;

  return (
    <>
      <ul className={s.grid}>
        {projects.map((p) => (
          <li key={p.slug}>
            <Link
              to={`/projects/${p.slug}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Card interactive>
                <div className={s.cardInner}>
                  {p.thumbnailUrl ? (
                    <figure className={s.figure}>
                      <img
                        src={p.thumbnailUrl}
                        alt={`${p.title} 썸네일`}
                        className={s.thumb}
                      />
                    </figure>
                  ) : null}
                </div>
                <div className={s.title}>{p.title}</div>
                <div className={s.date}>
                  {p.startDate ?? '—'} {p.endDate ? `~ ${p.endDate}` : ''}
                </div>

                {p.tags.length > 0 ? (
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {p.tags.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: 12,
                          padding: '4px 10px',
                          borderRadius: 999,
                          border: '1px solid #ddd',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                    {p.tags.length > 4 ? (
                      <span style={{ fontSize: 12, opacity: 0.6 }}>
                        +{p.tags.length - 4}
                      </span>
                    ) : null}
                  </div>
                ) : null}

                {p.summary ? (
                  <div className={s.summary}>{p.summary}</div>
                ) : null}
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
