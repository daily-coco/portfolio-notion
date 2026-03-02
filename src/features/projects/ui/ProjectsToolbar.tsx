import { Button } from '../../../shared/ui/Button/Button';
import type { SortKey } from '../model/types';
import * as s from './ProjectsToolbar.css';

type Props = {
  q: string;
  onChangeQ: (next: string) => void;

  sortKey: SortKey;
  onChangeSortKey: (next: SortKey) => void;

  onClear: () => void;
};

export default function ProjectsToolbar({
  q,
  onChangeQ,
  sortKey,
  onChangeSortKey,
  onClear,
}: Props) {
  return (
    <div className={s.bar}>
      <label className={s.srOnly} htmlFor='sort'>
        정렬
      </label>
      <select
        id='sort'
        className={s.control}
        value={sortKey}
        onChange={(e) => onChangeSortKey(e.target.value as SortKey)}
      >
        <option value='date_desc'>날짜 최신순</option>
        <option value='date_asc'>날짜 오래된순</option>
        <option value='title_asc'>제목 가나다순</option>
      </select>
      <Button variant='ghost' onClick={onClear}>
        초기화
      </Button>
      <div className={s.searchWrap}>
        <label className={s.srOnly} htmlFor='search'>
          검색
        </label>
        <input
          id='search'
          className={s.searchInput}
          value={q}
          onChange={(e) => onChangeQ(e.target.value)}
          placeholder='검색어 입력'
        />
        {q ? (
          <button
            type='button'
            className={s.clearX}
            onClick={() => onChangeQ('')}
            aria-label='검색어 지우기'
            title='검색어 지우기'
          >
            ×
          </button>
        ) : null}
      </div>
    </div>
  );
}
