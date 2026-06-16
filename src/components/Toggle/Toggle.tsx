import React, { useState } from 'react';
import './Toggle.css';

export interface ToggleItem {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export interface ToggleProps {
  items: ToggleItem[];
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Toggle = ({
  items,
  defaultValue,
  value: controlledValue,
  onChange,
}: ToggleProps) => {
  const [internalValue, setInternalValue] = useState(
    defaultValue ?? items[0]?.value
  );

  const selected = controlledValue ?? internalValue;

  const handleClick = (val: string) => {
    setInternalValue(val);
    onChange?.(val);
  };

  return (
    <div className="mg-toggle" role="group">
      {items.map((item, index) => {
        const isSelected = item.value === selected;
        const isFirst = index === 0;
        const isLast = index === items.length - 1;

        const classes = [
          'mg-toggle__item',
          isSelected ? 'mg-toggle__item--selected' : '',
          isFirst ? 'mg-toggle__item--first' : '',
          isLast ? 'mg-toggle__item--last' : '',
        ]
          .filter(Boolean)
          .join(' ');

        return (
          <button
            key={item.value}
            className={classes}
            onClick={() => handleClick(item.value)}
            aria-pressed={isSelected}
            type="button"
          >
            {item.icon && (
              <span className="mg-toggle__icon" aria-hidden="true">
                {item.icon}
              </span>
            )}
            <span className="mg-toggle__label">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default Toggle;
