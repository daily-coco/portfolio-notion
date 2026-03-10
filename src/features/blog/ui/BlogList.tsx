import { blogPostData } from '../model/blogPosts';
import BlogCardItem from './BlogCard';

export default function BlogCard() {
  return (
    <div>
      <ul className='postList'>
        {blogPostData.map((post) => (
          <BlogCardItem key={post.url} {...post} />
        ))}
      </ul>
    </div>
  );
}
