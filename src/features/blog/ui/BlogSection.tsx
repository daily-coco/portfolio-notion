import clsx from 'clsx';
import BlogCard from './BlogList';
import * as s from './blog.css';
import * as common from '../../../shared/styles/section.css';
type Props = {
  id: string;
  className?: string;
};

export default function BlogSection({ id, className }: Props) {
  return (
    <section id={id} className={clsx(common.sectionBase, s.section, className)}>
      <div className={s.inner}>
        <div className={s.header}>
          <div>
            <span className={s.eybrow}>Blog</span>
            <h2 className={s.title}>기록하고 정리한 글</h2>
          </div>

          <a href='' target='_blank' rel='noreferrer' className={s.moreLink}>
            블로그 글 더보기
          </a>
        </div>

        <BlogCard />
      </div>
    </section>
  );
}
