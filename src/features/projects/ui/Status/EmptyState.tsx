import { Button } from '../../../../shared/ui/Button/Button';
import * as s from './Status.css';

type Props = {
  title?: string;
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
};

export default function EmptyState({
  title = '표시할 내용이 없어요',
  message = '조건을 바꿔서 다시 확인해 주세요.',
  actionLabel,
  onAction,
}: Props) {
  return (
    <div className={s.wrap}>
      <strong className={s.title}>{title}</strong>
      <div className={s.desc}>{message}</div>

      {actionLabel && onAction ? (
        <div className={s.actions}>
          <Button variant='ghost' onClick={onAction}>
            {actionLabel}
          </Button>
        </div>
      ) : null}
    </div>
  );
}
