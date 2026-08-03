import React, { useState } from 'react';
import { Icon } from '../../icons/Icon';
import './SplitButton.css';

export interface SplitButtonOption {
  label: string;
  onClick: () => void;
}

export interface SplitButtonProps {
  label: string;
  onClick?: () => void;
  options?: SplitButtonOption[];
  disabled?: boolean;
  loading?: boolean;
}

export const SplitButton = ({
  label,
  onClick,
  options = [],
  disabled = false,
  loading = false,
}: SplitButtonProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mg-split-button">
      <button
        type="button"
        className="mg-split-button__main"
        onClick={onClick}
        disabled={disabled || loading}
      >
        {loading ? <span className="mg-split-button__spinner" aria-hidden="true" /> : label}
      </button>
      <button
        type="button"
        className="mg-split-button__trigger"
        onClick={() => setOpen((o) => !o)}
        disabled={disabled || loading}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`${label} options`}
      >
        <Icon name="navigate/chevron-down-gen2" />
      </button>
      {open && options.length > 0 && (
        <div className="mg-split-button__menu" role="menu">
          {options.map((option, i) => (
            <button
              key={i}
              type="button"
              role="menuitem"
              className="mg-split-button__menu-item"
              onClick={() => {
                option.onClick();
                setOpen(false);
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SplitButton;
