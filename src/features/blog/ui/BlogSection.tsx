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
            <h2 className={s.title}>
              <span className={s.eybrow}>Blog/Tistory</span>
              블로그 기록
            </h2>
            <p>기록을 통해 더욱 단단히 성장하고자 합니다.</p>
          </div>

          <a
            href='https://soi-story.tistory.com'
            target='_blank'
            rel='noreferrer'
            className={s.moreLink}
          >
            블로그 글 더보기
          </a>
        </div>

        <BlogCard />
      </div>
    </section>
  );
}
