import {
  type HTMLAttributes,
  type ReactNode,
  useCallback,
  useLayoutEffect,
  useRef,
} from 'react';

import { gsap, ScrollTrigger } from '../../../animation/gsap';

type RevealTag = 'section' | 'article' | 'div' | 'main' | 'header' | 'footer';

type ScrollRevealProps = HTMLAttributes<HTMLElement> & {
  as?: RevealTag;
  children: ReactNode;
  start?: string;
  once?: boolean;
  duration?: number;
  markers?: boolean;
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
}: ScrollRevealProps) {
  const rootRef = useRef<HTMLElement | null>(null);

  const setRootRef = useCallback((node: HTMLElement | null) => {
    rootRef.current = node;
  }, []);

  useLayoutEffect(() => {
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
  }, [start, once, duration, markers, refreshKey]);

  if (as === 'article') {
    return (
      <article {...rest} ref={setRootRef} className={className}>
        {children}
      </article>
    );
  }

  if (as === 'div') {
    return (
      <div {...rest} ref={setRootRef} className={className}>
        {children}
      </div>
    );
  }

  if (as === 'main') {
    return (
      <main {...rest} ref={setRootRef} className={className}>
        {children}
      </main>
    );
  }

  if (as === 'header') {
    return (
      <header {...rest} ref={setRootRef} className={className}>
        {children}
      </header>
    );
  }

  if (as === 'footer') {
    return (
      <footer {...rest} ref={setRootRef} className={className}>
        {children}
      </footer>
    );
  }

  return (
    <section {...rest} ref={setRootRef} className={className}>
      {children}
    </section>
  );
}
