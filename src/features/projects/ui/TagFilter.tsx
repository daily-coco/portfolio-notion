'use client';

import type { MouseEvent } from 'react';
import { Button } from '../../../shared/ui/Button/Button';
import * as s from './TagFilter.css';

type Props = {
  tags: string[];
  selectedTags: string[];
  onToggleTag: (tag: string) => void;
};

export default function TagFilter({ tags, selectedTags, onToggleTag }: Props) {
  if (tags.length === 0) return null;

  const handleClick = (event: MouseEvent<HTMLButtonElement>, tag: string) => {
    onToggleTag(tag);

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    event.currentTarget.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  return (
    <div className={s.tagFilterWrap}>
      <ul className={s.tagFilterList} aria-label='프로젝트 태그 필터'>
        {tags.map((tag) => {
          const selected = selectedTags.includes(tag);

          return (
            <li key={tag} className={s.tagFilterItem}>
              <Button
                type='button'
                variant={selected ? 'primary' : 'ghost'}
                className={s.tagButton}
                size='sm'
                onClick={(event) => handleClick(event, tag)}
                aria-pressed={selected}
              >
                {tag}
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
