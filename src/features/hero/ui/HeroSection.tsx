import clsx from 'clsx';
import { profileKeywords } from '../../../content/profile';
import * as s from './HeroSection.css';
import * as common from '../../../shared/styles/section.css';
import HeroSectionGraph from './HeroSectionGraph';

import ScrollReveal from '../../../shared/animation/ui/ScrollReveal/ScrollReveal';

type Props = {
  id: string;
  className?: string;
};

export default function HeroSection({ id, className }: Props) {
  return (
    <ScrollReveal
      as='section'
      id={id}
      className={clsx(common.sectionBase, s.section, className)}
      start='top 78%'
      once={true}
    >
      {/* <section id={id} className={clsx(common.sectionBase, s.section, className)}> */}
      <div className={s.inner}>
        <div className={s.content}>
          <sup className={s.eyebrow} data-reveal='up' data-reveal-delay='0'>
            UI DEVELOPER &gt; FRONTEND
          </sup>

          <h1
            id='hero-title'
            className={s.title}
            data-reveal='up'
            data-reveal-delay='0.08'
          >
            <span className={s.titleText}>퍼블리싱 실무 경험을 바탕으로</span>
            <span className={s.titleText}>
              프론트엔드로 <em className={s.liner}>확장하고</em> 있습니다
            </span>
          </h1>

          <p
            className={s.description}
            data-reveal='up'
            data-reveal-delay='0.16'
          >
            운영/구축/개선 프로젝트를 통해 쌓은 화면 구현 경험을 바탕으로
            컴포넌트 설계, 상태 관리, 재사용 가능한 UI 구조까지 확장해가고
            있습니다.
          </p>

          <div data-reveal='scale' data-reveal-delay='0.24'>
            <HeroSectionGraph />
          </div>
        </div>

        <aside
          className={s.heroSummaryCard}
          data-reveal='right'
          data-reveal-delay='0.16'
        >
          <h2 className={s.heroSummaryName}>
            <sup className={s.heroSummaryJob}>Senior UI DEVELOPER </sup>
            이소원
          </h2>
          <dl className={s.heroSummaryList}>
            {profileKeywords.map((item, index) => (
              <div
                className={s.heroSummaryItem}
                key={item.label}
                data-reveal='up'
                data-reveal-delay={String(0.24 + index * 0.06)}
              >
                <dt className={s.heroSummaryTitle}>
                  <sup className={s.heroSummaryLabel}>{item.label}</sup>
                  {item.title}
                </dt>
                <dd className={s.heroSummaryValue}>{item.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
      <i aria-hidden='true' className={s.heroShapeCircle1}></i>
      <i aria-hidden='true' className={s.heroShapeCircle2}></i>
      {/* </section> */}
    </ScrollReveal>
  );
}
