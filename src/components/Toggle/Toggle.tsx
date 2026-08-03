import React from 'react';
import './Toggle.css';

export interface ToggleOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export interface ToggleProps {
  options: ToggleOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const Toggle = ({ options, value, onChange, className }: ToggleProps) => (
  <div className={`mg-toggle${className ? ` ${className}` : ''}`} role="group">
    {options.map((option, index) => {
      const isSelected = option.value === value;
      const isFirst = index === 0;
      const isLast = index === options.length - 1;
      return (
        <button
          key={option.value}
          type="button"
          className={[
            'mg-toggle__item',
            isSelected ? 'mg-toggle__item--selected' : '',
            isFirst ? 'mg-toggle__item--first' : '',
            isLast ? 'mg-toggle__item--last' : '',
          ]
            .filter(Boolean)
            .join(' ')}
          onClick={() => onChange(option.value)}
          aria-pressed={isSelected}
        >
          {option.icon && <span className="mg-toggle__icon">{option.icon}</span>}
          <span className="mg-toggle__label">{option.label}</span>
        </button>
      );
    })}
  </div>
);

export default Toggle;
