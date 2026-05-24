import { useRef } from 'react';
import clsx from 'clsx';

import { heroGraphData, type HeroGraphType } from '../../../content/profile.ts';
import { gsap, useGSAP } from '../../../shared/animation/gsap.ts';
import * as s from './HeroSectionGraph.css.ts';

const groupClassMap = {
  Publishing: s.heroGraphPublishing,
  Frontend: s.heroGraphFrontend,
} satisfies Record<HeroGraphType['group'], string>;

const depthClassMap = {
  '1': s.heroGraph1,
  '2': s.heroGraph2,
  '3': s.heroGraph3,
  '4': s.heroGraph4,
} satisfies Record<HeroGraphType['depth'], string>;

const iconClassMap = {
  Publishing: [s.heroGraphPublishing1, s.heroGraphPublishing2, s.heroGraphPublishing3],
  Frontend: [s.heroGraphFrontend1, s.heroGraphFrontend2, s.heroGraphFrontend3],
} satisfies Record<HeroGraphType['group'], string[]>;

const lineClassMap = {
  Publishing: s.heroGraphLinePublishing,
  Frontend: s.heroGraphLineFrontend,
} satisfies Record<HeroGraphType['group'], string>;

const HERO_GRAPH_LINE_PATH =
  'M2 125H147H292C342 125 350 67 420 67C474 67 510 55 572 55C634 55 658 2 717 2';

function HeroGraphLine({ groupName }: { groupName: HeroGraphType['group'] }) {
  return (
    <svg
      className={clsx(s.heroGraphLineSvg, lineClassMap[groupName])}
      width='719'
      height='127'
      viewBox='0 0 719 127'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      focusable='false'
    >
      <path
        className={s.heroGraphLineTrack}
        d={HERO_GRAPH_LINE_PATH}
        pathLength={100}
        vectorEffect='non-scaling-stroke'
      />

      <path
        className={s.heroGraphLineProgress}
        data-graph-line='progress'
        d={HERO_GRAPH_LINE_PATH}
        pathLength={100}
        vectorEffect='non-scaling-stroke'
      />
    </svg>
  );
}

export default function HeroSectionGraph() {
  const graphRef = useRef<HTMLDivElement | null>(null);

  const groupedData = heroGraphData.reduce<
    Partial<Record<HeroGraphType['group'], HeroGraphType[]>>
  >((acc, item) => {
    if (!acc[item.group]) {
      acc[item.group] = [];
    }
    acc[item.group]!.push(item);
    return acc;
  }, {});

  const groupKeys = Object.keys(groupedData) as HeroGraphType['group'][];

  useGSAP(
    () => {
      const root = graphRef.current;
      if (!root) return;

      const progressLines = Array.from(
        root.querySelectorAll<SVGPathElement>('[data-graph-line="progress"]')
      );

      const items = Array.from(root.querySelectorAll<HTMLElement>('[data-graph-item]'));

      const icons = Array.from(root.querySelectorAll<HTMLElement>('[data-graph-icon]'));

      const labels = Array.from(root.querySelectorAll<HTMLElement>('[data-graph-label]'));

      const finalItem = root.querySelector<HTMLElement>('[data-graph-final="true"]');

      const finalIcon = finalItem?.querySelector<HTMLElement>('[data-graph-icon]') ?? null;
      const reduceMotion = window.matchMedia('(prefers-reduced-motion:reduce)').matches;

      if (reduceMotion) {
        gsap.set(progressLines, {
          strokeDashoffset: 0,
          autoAlpha: 1,
        });

        gsap.set([...items, ...icons, ...labels], {
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 1,
        });

        return;
      }
      gsap.set(progressLines, {
        strokeDasharray: 100,
        strokeDashoffset: 100,
        autoAlpha: 0,
      });

      gsap.set(labels, {
        autoAlpha: 0,
        y: 10,
      });

      gsap.set(items, {
        autoAlpha: 0,
        y: 18,
        scale: 0.96,
      });

      gsap.set(icons, {
        scale: 0.88,
        transformOrigin: '50% 50%',
      });
      if (finalIcon) {
        gsap.set(finalIcon, {
          boxShadow: '0 0 0 0 rgba(185, 155, 126, 0)',
        });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: 'top 78%',
          toggleActions: 'play none none reverse',
        },
      });
      tl.to(labels, {
        autoAlpha: 1,
        y: 0,
        duration: 0.35,
        stagger: 0.08,
        ease: 'power2.out',
      })
        .to(
          progressLines,
          {
            autoAlpha: 1,
            strokeDashoffset: 0,
            duration: 1.25,
            stagger: 0.18,
            ease: 'power2.out',
          },
          0.08
        )
        .to(
          items,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.48,
            stagger: 0.1,
            ease: 'back.out(1.25)',
          },
          0.18
        )
        .to(
          icons,
          {
            scale: 1,
            duration: 0.42,
            stagger: 0.1,
            ease: 'back.out(1.45)',
          },
          0.22
        );

      if (finalIcon) {
        tl.to(
          finalIcon,
          {
            scale: 1.08,
            boxShadow: '0 0 0 14px rgba(185, 155, 126, 0.18)',
            duration: 0.28,
            ease: 'power2.out',
          },
          '-=0.08'
        ).to(finalIcon, {
          scale: 1,
          boxShadow: '0 0 0 8px rgba(185, 155, 126, 0)',
          duration: 0.45,
          ease: 'power2.out',
        });
      }
    },
    { scope: graphRef }
  );

  return (
    <div ref={graphRef} className={s.heroGraphContainer}>
      {groupKeys.map((groupName) => (
        <div className={clsx(s.heroGraphGroup)} key={groupName}>
          <strong
            data-graph-label
            className={clsx(s.heroGraphGroupLabel, groupClassMap[groupName])}
          >
            {groupName}
          </strong>
          <ul key={groupName} className={clsx(s.heroGraphList)}>
            {groupedData[groupName]?.map((item, index) => {
              const isFirstPublishingItem = groupName == 'Publishing' && index === 0;

              const isFinalItem =
                groupName === 'Frontend' && index === (groupedData[groupName]?.length ?? 0) - 1;

              return (
                <li
                  data-graph-item
                  data-graph-final={isFinalItem ? 'true' : undefined}
                  key={`${item.group}-${item.title}-${index}`}
                  className={clsx(
                    s.heroGraphItem,
                    isFirstPublishingItem && s.heroGraphItemNoMargin,
                    depthClassMap[item.depth],
                    item.extend && s.isExtend
                  )}
                >
                  <i
                    data-graph-icon
                    aria-hidden='true'
                    className={clsx(s.heroGraphIcon, iconClassMap[groupName][index])}
                  ></i>
                  <strong className={s.heroGraphTitle}>{item.title}</strong>
                  <span className={s.heroGraphDesc}>{item.desc}</span>
                </li>
              );
            })}
          </ul>
          <HeroGraphLine groupName={groupName} />
        </div>
      ))}
    </div>
  );
}
