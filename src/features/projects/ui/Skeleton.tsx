import * as s from './Skeleton.css';

type Props = {
  height?: number;
  width?: number | string;
  radius?: number;
};

export default function Skeleton({
  height = 14,
  width = '100%',
  radius = 8,
}: Props) {
  return (
    <div
      className={s.root}
      style={{
        height,
        width,
        borderRadius: radius,
      }}
      aria-hidden='true'
    >
      <div className={s.shimmerLayer} />
    </div>
  );
}
