import * as s from './ProjectList.css';
type TagsProps = {
  tags: string[];
  maxVisible?: number;
};
const DEFAULT_MAX_VISIBLE = 3;

export default function ProjectCardTags({ tags, maxVisible = DEFAULT_MAX_VISIBLE }: TagsProps) {
  const visibleTags = tags.slice(0, maxVisible);
  const hiddenTagCount = Math.max(tags.length - maxVisible, 0);
  return (
    <div className={s.cardTagsWrap}>
      <ul className={s.cardTagsList}>
        {visibleTags.map((t) => (
          <li key={t} className={s.cardTagsTag}>
            {t}
          </li>
        ))}
      </ul>
      {hiddenTagCount > 0 ? <sup className={s.cardTagsMore}>+{hiddenTagCount}</sup> : null}
    </div>
  );
}
