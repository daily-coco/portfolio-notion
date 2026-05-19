import clsx from 'clsx';
import ScrollReveal from '../../../shared/animation/ui/scrollreveal/ScrollReveal';
import * as common from '../../../shared/styles/section.css';
import * as s from './TechMarquee.css.ts';

import { techMarqueeLogos } from '../../../content/profile.ts';
import { getTechLogoSrc } from './techLogoAssets';

const VISUAL_REPEAT_COUNT = 3;

const logos = techMarqueeLogos.map((logo) => ({
  ...logo,
  src: getTechLogoSrc(logo.id),
}));

const visualLogos = Array.from(
  { length: VISUAL_REPEAT_COUNT },
  () => logos
).flat();

export default function TechMarquee() {
  return (
    <ScrollReveal
      aria-label='사용 기술'
      as='section'
      className={clsx(common.sectionBase)}
      start='top 78%'
      once={true}
    >
      <div className={s.marquee}>
        <div className={s.track}>
          <ul className={clsx(s.list, s.screenReaderOnly)}>
            {logos.map((logo) => (
              <li key={logo.id}>{logo.label}</li>
            ))}
          </ul>
          <div className={s.marquee} aria-hidden='true'>
            <div className={s.track}>
              <ul className={s.group}>
                {visualLogos.map((logo, index) => (
                  <li key={`group-a-${logo.id}-${index}`} className={s.item}>
                    <img
                      src={logo.src}
                      alt=''
                      width={40}
                      height={40}
                      decoding='async'
                      draggable={false}
                      className={s.logo}
                    />
                  </li>
                ))}
              </ul>

              <ul className={s.group}>
                {visualLogos.map((logo, index) => (
                  <li key={`group-b-${logo.id}-${index}`} className={s.item}>
                    <img
                      src={logo.src}
                      alt=''
                      width={40}
                      height={40}
                      decoding='async'
                      draggable={false}
                      className={s.logo}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
