import React from 'react';
import './Button.css';

export type ButtonHierarchy =
  | 'primary'
  | 'secondary'
  | 'secondary-dark'
  | 'secondary-neutral'
  | 'tertiary'
  | 'destructive'
  | 'brand';

export type ButtonSize = 'small' | 'default';

export type ButtonIconPosition = 'leading' | 'trailing' | 'only';

export interface ButtonProps {
  children?: React.ReactNode;
  hierarchy?: ButtonHierarchy;
  size?: ButtonSize;
  /** Omit for no icon. Set to control where the icon renders. */
  iconPosition?: ButtonIconPosition;
  icon?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
}

export const Button = ({
  children,
  hierarchy = 'primary',
  size = 'default',
  iconPosition,
  icon,
  disabled = false,
  loading = false,
  onClick,
  className,
  type = 'button',
  'aria-label': ariaLabel,
}: ButtonProps) => {
  const isIconOnly = iconPosition === 'only';

  const classes = [
    'mg-button',
    `mg-button--${hierarchy}`,
    `mg-button--${size}`,
    isIconOnly ? 'mg-button--icon-only' : '',
    loading ? 'mg-button--loading' : '',
    className || '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      aria-label={isIconOnly ? ariaLabel : undefined}
      aria-busy={loading || undefined}
    >
      {loading && <span className="mg-button__spinner" aria-hidden="true" />}
      {!loading && icon && iconPosition === 'leading' && (
        <span className="mg-button__icon">{icon}</span>
      )}
      {!loading && !isIconOnly && children && (
        <span className="mg-button__label">{children}</span>
      )}
      {!loading && icon && isIconOnly && <span className="mg-button__icon">{icon}</span>}
      {!loading && icon && iconPosition === 'trailing' && (
        <span className="mg-button__icon">{icon}</span>
      )}
    </button>
  );
};
