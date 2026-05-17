import clsx from 'clsx';
import { profileKeywords } from '../../../content/profile';
import * as s from './HeroSection.css';
import * as common from '../../../shared/styles/section.css';
import HeroSectionGraph from './HeroSectionGraph';

type Props = {
  id: string;
  className?: string;
};

export default function HeroSection({ id, className }: Props) {
  return (
    <section id={id} className={clsx(common.sectionBase, s.section, className)}>
      <div className={s.inner}>
        <div className={s.content}>
          <sup className={s.eyebrow}>UI DEVELOPER &gt; FRONTEND</sup>

          <h1 id='hero-title' className={s.title}>
            <span className={s.titleText}>퍼블리싱 실무 경험을 바탕으로</span>
            <span className={s.titleText}>
              프론트엔드로 <em className={s.liner}>확장하고</em> 있습니다
            </span>
          </h1>

          <p className={s.description}>
            운영/구축/개선 프로젝트를 통해 쌓은 화면 구현 경험을 바탕으로
            컴포넌트 설계, 상태 관리, 재사용 가능한 UI 구조까지 확장해가고
            있습니다.
          </p>
          <HeroSectionGraph />
        </div>

        <aside className={s.heroSummaryCard}>
          <h2 className={s.heroSummaryName}>
            <sup className={s.heroSummaryJob}>Senior UI DEVELOPER </sup>
            이소원
          </h2>
          <dl className={s.heroSummaryList}>
            {profileKeywords.map((item) => (
              <div className={s.heroSummaryItem} key={item.label}>
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
    </section>
  );
}
