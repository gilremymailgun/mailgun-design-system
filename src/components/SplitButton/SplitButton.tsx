import React, { useState } from 'react';
import './SplitButton.css';

export interface SplitButtonProps {
  label?: string;
  disabled?: boolean;
  loading?: boolean;
  onActionClick?: () => void;
  onDropdownClick?: () => void;
}

export const SplitButton = ({
  label = 'Split',
  disabled = false,
  loading = false,
  onActionClick,
  onDropdownClick,
}: SplitButtonProps) => {
  const [dropdownHovered, setDropdownHovered] = useState(false);

  const rootClass = [
    'mg-split-button',
    disabled ? 'mg-split-button--disabled' : '',
    loading ? 'mg-split-button--loading' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClass}>
      <button
        className="mg-split-button__action"
        disabled={disabled || loading}
        onClick={onActionClick}
        type="button"
      >
        {loading ? (
          <span className="mg-split-button__spinner" aria-hidden="true" />
        ) : (
          <span className="mg-split-button__label">{label}</span>
        )}
      </button>
      <button
        className="mg-split-button__chevron"
        disabled={disabled || loading}
        onClick={onDropdownClick}
        onMouseEnter={() => setDropdownHovered(true)}
        onMouseLeave={() => setDropdownHovered(false)}
        aria-label="More options"
        type="button"
      >
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M1 1L5 5L9 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default SplitButton;
