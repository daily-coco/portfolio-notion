import { Button } from '../../../shared/ui/Button/Button';
import * as s from './TagFilter.css';

type Props = {
  tags: string[];
  selectedTags: string[];
  onToggleTag: (tag: string) => void;
};

export default function TagFilter({ tags, selectedTags, onToggleTag }: Props) {
  if (tags.length === 0) return null;

  return (
    <div className={s.wrap} aria-label='프로젝트 태그 필터'>
      {tags.map((tag) => {
        const selected = selectedTags.includes(tag);
        return (
          <Button
            key={tag}
            variant={selected ? 'primary' : 'ghost'}
            size='sm'
            onClick={() => onToggleTag(tag)}
            aria-pressed={selected}
          >
            {tag}
          </Button>
        );
      })}
    </div>
  );
}
