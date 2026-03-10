import { profileKeywords } from '../../../content/profile';
import * as s from './HeroSection.css';

export default function HeroSection() {
  return (
    <section className={s.section} aria-labelledby='hero-title'>
      <div className={s.inner}>
        <div className={s.content}>
          <p className={s.eyebrow}>WEB PUBLISHER · REACT FRONTEND</p>

          <h1 id='hero-title' className={s.title}>
            퍼블리싱 실무 경험을 바탕으로
            <br className={s.titleBreak} />
            React 프론트엔드로 확장하고 있습니다
          </h1>

          <p className={s.description}>
            운영·구축·개선 프로젝트를 통해 쌓은 화면 구현 경험을 바탕으로
            컴포넌트 설계, 상태 관리, 재사용 가능한 UI 구조까지 확장해가고
            있습니다.
          </p>

          <div className={s.actions}>
            <a href='#projects' className={s.primaryButton}>
              프로젝트 보기
            </a>
            <a href='#skills' className={s.secondaryButton}>
              기술 보기
            </a>
          </div>
        </div>

        <aside className={s.summaryCard} aria-label='핵심 요약'>
          <dl className={s.summaryList}>
            {profileKeywords.map((item) => (
              <div className={s.summaryItem} key={item.label}>
                <dt className={s.summaryLabel}>{item.label}</dt>
                <dd className={s.summaryValue}>{item.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
