import { Button } from '../../../../shared/ui/Button/Button';
import * as s from './Status.css';

type Props = {
  title?: string;
  message?: string;
  onRetry?: () => void;
};

export default function ErrorState({
  title = '불러오지 못 했어요',
  message = '잠시 후 다시 시도해 주세요.',
  onRetry,
}: Props) {
  return (
    <div className={s.wrap}>
      <div className={s.title}>{title}</div>
      <div className={s.desc}>{message}</div>

      {onRetry ? (
        <div className={s.actions}>
          <Button variant='primary' onClick={onRetry}>
            다시 시도
          </Button>
        </div>
      ) : null}
    </div>
  );
}
