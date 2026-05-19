import {
  createElement,
  type HTMLAttributes,
  type ReactNode,
  useRef,
} from 'react';

import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '../../gsap';

type RevealTag = 'section' | 'article' | 'div' | 'main' | 'header' | 'footer';

type ScrollRevalProps = HTMLAttributes<HTMLElement> & {
  as?: RevealTag;
  children: ReactNode;

  /**
   * ScrollTrigger 시작 위치
   */
  start?: string;

  /** once
   *  - true : 한 번 등장 후 유지
   *  - false : 위로 올라가면 reverse / 위에서 다시 내려올 때 다시 재생
   */
  once?: boolean;

  /*
    애니메이션 시간
  */
  duration?: number;

  /**
   * 개발 중 ScrollTrigger marker 확인용
   */
  markers?: boolean;

  /**
   * 비동기 데이터 로드 후 다시 reveal 대상 계산 필요할 때 사용
   */
  refreshKey?: string | number | boolean;
};

const getRevealFromVars = (direction?: string) => {
  switch (direction) {
    case 'left':
      return { x: -56, y: 0, scale: 1 };

    case 'right':
      return { x: 56, y: 0, scale: 1 };

    case 'scale':
      return { x: 0, y: 24, scale: 0.96 };

    case 'down':
      return { x: 0, y: -40, scale: 1 };

    case 'up':
    default:
      return { x: 0, y: 48, scale: 1 };
  }
};

const getRevealDelay = (value?: string) => {
  const delay = Number(value);

  return Number.isFinite(delay) ? delay : 0;
};

export default function ScrollReveal({
  as = 'section',
  children,
  className,
  start = 'top 82%',
  once = true,
  duration = 0.8,
  markers = false,
  refreshKey,
  ...rest
}: ScrollRevalProps) {
  const rootRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const root = rootRef.current;

      if (!root) return;

      const targets = gsap.utils.toArray<HTMLElement>('[data-reveal]', root);

      if (targets.length === 0) {
        ScrollTrigger.refresh();
        return;
      }

      const mm = gsap.matchMedia();

      mm.add(
        {
          reduceMotion: '(prefers-reduced-motion: reduce)',
          motionOK: '(prefers-reduced-motion: no-preference)',
        },
        (context) => {
          const reduceMotion = Boolean(context.conditions?.reduceMotion);
          if (reduceMotion) {
            gsap.set(targets, {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
            });

            return;
          }
          targets.forEach((target) => {
            const direction = target.dataset.reveal;
            const delay = getRevealDelay(target.dataset.revealDelay);
            const fromVars = getRevealFromVars(direction);

            gsap.fromTo(
              target,
              {
                autoAlpha: 0,
                ...fromVars,
              },
              {
                autoAlpha: 1,
                x: 0,
                y: 0,
                scale: 1,
                duration,
                delay,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: target,
                  start,
                  markers,
                  toggleActions: once
                    ? 'play none none none'
                    : 'play none none reverse',
                },
              }
            );
          });
        }
      );

      const raf = window.requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      return () => {
        window.cancelAnimationFrame(raf);
        mm.revert();
      };
    },
    {
      scope: rootRef,
      dependencies: [start, once, duration, markers, refreshKey],
      revertOnUpdate: true,
    }
  );

  return createElement(
    as,
    {
      ...rest,
      ref: rootRef,
      className,
    },
    children
  );
}
