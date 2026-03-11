import type { CompositionEventHandler } from 'react';
import { Button } from '../../../shared/ui/Button/Button';
import type { SortKey } from '../../../shared/types/project';

import * as s from './ProjectsToolbar.css';
import * as a11y from '../../../styles/a11y.css';

type Props = {
  q: string;
  onChangeQ: (next: string) => void;

  sortKey: SortKey;
  onChangeSortKey: (next: SortKey) => void;

  onClear: () => void;
  onCompositionStart?: CompositionEventHandler<HTMLInputElement>;
  onCompositionEnd?: CompositionEventHandler<HTMLInputElement>;
};

export default function ProjectsToolbar({
  q,
  onChangeQ,
  sortKey,
  onChangeSortKey,
  onClear,
  onCompositionStart,
  onCompositionEnd,
}: Props) {
  return (
    <div className={s.bar}>
      <label className={a11y.srOnly} htmlFor='sort'>
        프로젝트 정렬
      </label>
      <select
        id='sort'
        className={s.control}
        value={sortKey}
        onChange={(e) => onChangeSortKey(e.target.value as SortKey)}
      >
        <option value='date_desc'>최신순</option>
        <option value='date_asc'>오래된순</option>
        <option value='title_asc'>제목순</option>
      </select>
      <div className={s.searchWrap}>
        <label className={a11y.srOnly} htmlFor='search'>
          프로젝트 내 검색
        </label>
        <input
          id='search'
          className={s.searchInput}
          value={q}
          onChange={(e) => onChangeQ(e.target.value)}
          placeholder='검색어 입력'
          onCompositionStart={onCompositionStart}
          onCompositionEnd={onCompositionEnd}
        />
        {q ? (
          <button
            type='button'
            className={s.clearX}
            onClick={() => onChangeQ('')}
            aria-label='검색어 지우기'
          >
            ×
          </button>
        ) : null}
      </div>
      <Button variant='ghost' onClick={onClear}>
        초기화
      </Button>
    </div>
  );
}
