import Skeleton from './Skeleton';
import * as s from './ProjectsSectionSkeleton.css';
type Props = {
  showHeader?: boolean;
  itemCount?: number;
  tagCount?: number;
};

export default function ProjectsSectionSkeleton({
  showHeader = true,
  itemCount = 6,
  tagCount = 10,
}: Props) {
  return (
    <div className={s.loadingWrap}>
      {showHeader ? (
        <div className={s.skTitleBlock}>
          <Skeleton height={28} width={180} />
          <Skeleton height={14} width={120} />
        </div>
      ) : null}

      <div className={s.skToolbarRow}>
        <Skeleton height={32} width={140} />
        <Skeleton height={32} width={80} />
        <Skeleton height={32} width={220} />
      </div>

      <div className={s.skListBlock}>
        {Array.from({ length: itemCount }).map((_, i) => (
          <Skeleton key={i} height={18} />
        ))}
      </div>

      <div className={s.skTagsRow}>
        {Array.from({ length: tagCount }).map((_, i) => (
          <Skeleton key={i} height={30} width={80} radius={999} />
        ))}
      </div>
    </div>
  );
}
