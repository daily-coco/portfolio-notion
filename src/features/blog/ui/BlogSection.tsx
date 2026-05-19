import clsx from 'clsx';
import BlogCard from './BlogList';
import * as s from './blog.css';
import * as common from '../../../shared/styles/section.css';
import ScrollReveal from '../../../shared/animation/ui/ScrollReveal/ScrollReveal';
type Props = {
  id: string;
  className?: string;
};

export default function BlogSection({ id, className }: Props) {
  return (
    <ScrollReveal
      as='section'
      id={id}
      className={clsx(common.sectionBase, s.section, className)}
      start='top 80%'
      once={true}
    >
      <div className={s.inner}>
        <div className={s.header}>
          <div data-reveal='up'>
            <h2 className={s.title}>
              <span className={s.eybrow}>Blog/Tistory</span>
              블로그 기록
            </h2>
            <p data-reveal='up' data-reveal-delay='0.08'>
              기록을 통해 더욱 단단히 성장하고자 합니다.
            </p>
          </div>

          <a
            href='https://soi-story.tistory.com'
            target='_blank'
            rel='noreferrer'
            className={s.moreLink}
            data-reveal='up'
            data-reveal-delay='0.08'
          >
            블로그 글 더보기
          </a>
        </div>

        <BlogCard />
      </div>
    </ScrollReveal>
  );
}
