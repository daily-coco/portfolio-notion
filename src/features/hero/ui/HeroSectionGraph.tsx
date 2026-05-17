import * as s from './HeroSectionGraph.css.ts';
import { heroGraphData, type HeroGraphType } from '../../../content/profile.ts';
import clsx from 'clsx';

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
  Publishing: [
    s.heroGraphPublishing1,
    s.heroGraphPublishing2,
    s.heroGraphPublishing3,
  ],
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
        d={HERO_GRAPH_LINE_PATH}
        pathLength={100}
        vectorEffect='non-scaling-stroke'
      />
    </svg>
  );
}

export default function HeroSectionGraph() {
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

  return (
    <div className={s.heroGraphContainer}>
      {groupKeys.map((groupName) => (
        <div className={clsx(s.heroGraphGroup)} key={groupName}>
          <strong
            className={clsx(s.heroGraphGroupLabel, groupClassMap[groupName])}
          >
            {groupName}
          </strong>
          <ul key={groupName} className={clsx(s.heroGraphList)}>
            {groupedData[groupName]?.map((item, index) => {
              const isFirstPublishingItem =
                groupName == 'Publishing' && index === 0;
              return (
                <li
                  key={`${item.group}-${item.title}-${index}`}
                  className={clsx(
                    s.heroGraphItem,
                    isFirstPublishingItem && s.heroGraphItemNoMargin,
                    depthClassMap[item.depth],
                    item.extend && s.isExtend
                  )}
                >
                  <i
                    aria-hidden='true'
                    className={clsx(
                      s.heroGraphIcon,
                      iconClassMap[groupName][index]
                    )}
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
