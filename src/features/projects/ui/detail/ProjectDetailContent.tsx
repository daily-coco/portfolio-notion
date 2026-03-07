import Card from '../../../../shared/ui/Card/Card';
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
        <Card padding='md'>
          <div className={s.contentCard}>
            {isLoading ? (
              <ContentSkeleton />
            ) : isError ? (
              <div style={{ display: 'grid', gap: 10 }}>
                <ErrorState
                  title='본문을 불러오지 못했어요'
                  onRetry={() => onRetry?.()}
                />
              </div>
            ) : (
              <ProjectMarkdown markdown={markdown ?? ''} />
            )}
          </div>
        </Card>
      </div>
    </>
  );
}
