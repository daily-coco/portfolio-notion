import { blogPostData } from '../model/blogPosts';
import BlogCardItem from './BlogCard';
import * as s from './blog.css';

export default function BlogCard() {
  return (
    <div>
      <ul className={s.postList}>
        {blogPostData.map((post, index) => (
          <BlogCardItem key={post.url} {...post} isFirst={index === 0} />
        ))}
      </ul>
    </div>
  );
}
