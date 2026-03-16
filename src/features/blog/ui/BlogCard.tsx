import type { BlogPost } from '../model/types';
import * as s from './blog.css';

type Props = BlogPost & {
  isFirst?: boolean;
};

export default function BlogCardItem({
  thumbnail,
  title,
  url,
  date,
  category,
  recently,
  summary,
  isFirst = false,
}: Props) {
  return (
    <li className={s.postItem}>
      <a
        href={url}
        title='새창열림'
        target='_blank'
        rel='noreferrer'
        className={isFirst ? s.postLinkFeatured : s.postLink}
      >
        {isFirst && (
          <div className={s.postThumbnailWrap}>
            {thumbnail ? (
              <img
                src={thumbnail}
                alt='포스트 대표 썸네일'
                className={s.postThumbnail}
              />
            ) : (
              <div className={s.postThumbnailFallback}>썸네일 없음</div>
            )}
          </div>
        )}
        <div
          className={`${s.postBadgeWrap} ${isFirst ? s.postBadgeWrapFeatured : ''}`}
        >
          {recently && <em className={s.recentBadge}>새로운 글</em>}
          <span className={s.categoryBadge}>{category}</span>
        </div>
        <div
          className={`${s.postContent} ${isFirst ? s.postContentFeatured : ''}`}
        >
          <strong
            className={`${s.postTitle} ${isFirst ? s.postTitleFeatured : ''}`}
          >
            {title}
          </strong>
          <time className={s.postDate}>{date}</time>
        </div>
        <div className={s.postSummary}>
          <p>{summary}</p>
        </div>
      </a>
    </li>
  );
}
