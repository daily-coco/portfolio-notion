import Skeleton from './Skeleton';
import * as s from './ContentSkeleton.css';

export default function ContentSkeleton() {
  return (
    <div className={s.page}>
      <section className={s.header}>
        <div className={s.thumb}>
          <Skeleton height='100%' radius={16} />
        </div>

        <div className={s.meta}>
          <Skeleton height={28} width='72%' />
          <Skeleton height={22} width='88%' />
          <Skeleton height={16} width='40%' />

          <div className={s.tagRow}>
            <Skeleton height={32} width={68} radius={999} />
            <Skeleton height={32} width={56} radius={999} />
            <Skeleton height={32} width={74} radius={999} />
            <Skeleton height={32} width={82} radius={999} />
          </div>

          <Skeleton height={44} width='100%' radius={12} />
        </div>
      </section>

      <section className={s.body}>
        <Skeleton height={24} width='24%' />
        <Skeleton height={14} width='92%' />
        <Skeleton height={14} width='88%' />
        <Skeleton height={14} width='84%' />
        <div className={s.bodyBlock}>
          <Skeleton height='100%' radius={16} />
        </div>
      </section>

      <section className={s.grid}>
        <div className={s.card}>
          <Skeleton height={20} width='55%' />
        </div>

        <div className={s.card}>
          <Skeleton height={20} width='52%' />
        </div>
      </section>
    </div>
  );
}
