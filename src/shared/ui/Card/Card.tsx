import * as React from 'react';
import clsx from 'clsx';
import * as s from './Card.css';

type CardPadding = keyof typeof s.padding;

type Props = React.HTMLAttributes<HTMLDivElement> & {
  padding?: CardPadding;
  interactive?: boolean;
};

export default function Card({
  padding = 'md',
  interactive = false,
  className,
  ...rest
}: Props) {
  return (
    <div
      className={clsx(
        s.card,
        s.padding[padding],
        interactive && s.interactive,
        className
      )}
      {...rest}
    />
  );
}
