import * as s from './ContentSkeleton.css';
import Skeleton from './Skeleton';

export default function ContentSkeleton() {
  return (
    <div className={s.skDetailWrap} aria-hidden='true'>
      <Skeleton height={24} width='40%' radius={8} />
      <Skeleton height={14} width='60%' radius={8} />

      <div className={s.bodyBlock}>
        <Skeleton height={220} radius={12} />
      </div>
    </div>
  );
}
