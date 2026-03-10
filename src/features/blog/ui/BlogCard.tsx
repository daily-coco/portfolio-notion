import type { BlogPostType } from '../model/types';

export default function BlogCardItem({
  thumbnail,
  title,
  url,
  date,
  category,
  recently,
}: BlogPostType) {
  return (
    <li>
      <a href={url} title='새창열림' target='_blank' rel='noreferrer'>
        {thumbnail ? (
          <div className='thumbnail'>
            <img src={thumbnail} alt='' />
          </div>
        ) : null}
        {recently && <em>최근 글</em>}
        <strong className='postTitle'>{title}</strong>
        <time>{date}</time>
        <span>{category}</span>
      </a>
    </li>
  );
}
