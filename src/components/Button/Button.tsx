import React from 'react';
import './Button.css';

export type ButtonHierarchy = 'primary' | 'secondary' | 'destructive' | 'neutral';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonIcon = 'none' | 'leading' | 'trailing' | 'only';

export interface ButtonProps {
  label?: string;
  hierarchy?: ButtonHierarchy;
  size?: ButtonSize;
  icon?: ButtonIcon;
  iconElement?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

export const Button = ({
  label = 'Button',
  hierarchy = 'primary',
  size = 'md',
  icon = 'none',
  iconElement,
  disabled = false,
  loading = false,
  onClick,
}: ButtonProps) => {
  const classes = [
    'mg-button',
    `mg-button--${hierarchy}`,
    `mg-button--${size}`,
    icon !== 'none' ? `mg-button--icon-${icon}` : '',
    disabled ? 'mg-button--disabled' : '',
    loading ? 'mg-button--loading' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      type="button"
    >
      {loading && <span className="mg-button__spinner" aria-hidden="true" />}
      {!loading && icon === 'leading' && iconElement && (
        <span className="mg-button__icon">{iconElement}</span>
      )}
      {icon !== 'only' && !loading && (
        <span className="mg-button__label">{label}</span>
      )}
      {!loading && icon === 'trailing' && iconElement && (
        <span className="mg-button__icon">{iconElement}</span>
      )}
      {!loading && icon === 'only' && iconElement && (
        <span className="mg-button__icon" aria-label={label}>{iconElement}</span>
      )}
    </button>
  );
};

export default Button;
