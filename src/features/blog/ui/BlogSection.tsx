import BlogCard from './BlogList';
import * as s from './blog.css';

export default function BlogSection() {
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.header}>
          <div>
            <span className={s.eybrow}>Blog</span>
            <h2 className={s.title}>기록하고 정리한 글</h2>
          </div>

          <a href='' target='_blank' rel='noreferrer' className={s.moreLink}>
            티스토리 보러가기
          </a>
        </div>

        <BlogCard />
      </div>
    </section>
  );
}
