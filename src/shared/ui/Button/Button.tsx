import * as React from 'react';
import clsx from 'clsx';
import * as s from './Button.css';

type ButtonVariant = 'primary' | 'danger' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';
type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  children?: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
  };

type ButtonAsAnchor = CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a';
  };

type Props = ButtonAsButton | ButtonAsAnchor;

export function Button(props: Props) {
  const {
    variant = 'primary',
    size = 'md',
    fullWidth,
    className,
    children,
    ...rest
  } = props;

  const classes = clsx(
    s.base,
    s.variant[variant],
    s.size[size],
    fullWidth && s.fullWidth,
    className
  );

  if (props.as === 'a') {
    const aProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a className={classes} {...aProps}>
        {children}
      </a>
    );
  }
  const bProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} type={bProps.type ?? 'button'} {...bProps}>
      {children}
    </button>
  );
}
