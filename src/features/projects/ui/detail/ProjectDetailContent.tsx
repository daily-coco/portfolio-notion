import ContentSkeleton from '../ContentSkeleton';
import ErrorState from '../Status/ErrorState';
import ProjectMarkdown from './ProjectMarkdown';
import * as s from '../../../../pages/ProjectDetailPage.css';

type Props = {
  markdown?: string;
  isLoading: boolean;
  isError: boolean;
  onRetry?: () => void;
};

export default function ProjectDetailContent({
  markdown,
  isLoading,
  isError,
  onRetry,
}: Props) {
  return (
    <>
      <div className={s.contentWrap}>
        <div className={s.contentCard}>
          {isLoading ? (
            <ContentSkeleton />
          ) : isError ? (
            <ErrorState
              title='본문을 불러오지 못했어요'
              onRetry={() => onRetry?.()}
            />
          ) : (
            <ProjectMarkdown markdown={markdown ?? ''} />
          )}
        </div>
      </div>
    </>
  );
}
