import React from 'react';
import { Icon } from '../../icons/Icon';
import { Button } from '../Button/Button';
import './Field.css';

export type FieldSize = 'normal' | 'small';

export interface FieldProps {
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  /** Small secondary text shown next to the label, e.g. "(Optional message)" */
  labelOptionText?: string;
  /** Shows a tooltip icon next to the label. Pass the tooltip content via `labelTooltipContent` if you wire up a real tooltip. */
  showLabelTooltip?: boolean;
  additionalCustomText?: string;
  leadingIcon?: React.ReactNode;
  /** Defaults to a chevron-down icon if `showTrailingIcon` is true and no custom icon is passed. */
  trailingIcon?: React.ReactNode;
  showTrailingIcon?: boolean;
  /** Renders a disabled-looking inline button (e.g. "Add") at the end of the field row. */
  buttonLabel?: string;
  onButtonClick?: () => void;
  helpText?: string;
  showHelpIcon?: boolean;
  /** e.g. "0/10" */
  counterText?: string;
  size?: FieldSize;
  error?: boolean;
  disabled?: boolean;
  className?: string;
}

export const Field = ({
  value,
  onChange,
  placeholder,
  label,
  labelOptionText,
  showLabelTooltip,
  additionalCustomText,
  leadingIcon,
  trailingIcon,
  showTrailingIcon,
  buttonLabel,
  onButtonClick,
  helpText,
  showHelpIcon,
  counterText,
  size = 'normal',
  error = false,
  disabled = false,
  className,
}: FieldProps) => {
  const classes = [
    'mg-field',
    `mg-field--${size}`,
    error ? 'mg-field--error' : '',
    disabled ? 'mg-field--disabled' : '',
    className || '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      {label && (
        <div className="mg-field__label-row">
          <span className="mg-field__label">{label}</span>
          {labelOptionText && <span className="mg-field__label-option">{labelOptionText}</span>}
          {showLabelTooltip && (
            <span className="mg-field__label-tooltip-icon">
              <Icon name="feedback/info-circle-gen1" />
            </span>
          )}
        </div>
      )}
      {additionalCustomText && (
        <span className="mg-field__custom-text">{additionalCustomText}</span>
      )}
      <div className="mg-field__row">
        <div className="mg-field__box">
          {leadingIcon && <span className="mg-field__icon">{leadingIcon}</span>}
          <input
            type="text"
            className="mg-field__input"
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            onChange={(e) => onChange?.(e.target.value)}
          />
          {showTrailingIcon && (
            <span className="mg-field__icon mg-field__icon--trailing">
              {trailingIcon || <Icon name="navigate/chevron-down-gen2" />}
            </span>
          )}
        </div>
        {buttonLabel && (
          <Button hierarchy="primary" size={size === 'small' ? 'small' : 'default'} disabled onClick={onButtonClick}>
            {buttonLabel}
          </Button>
        )}
      </div>
      {(helpText || counterText) && (
        <div className="mg-field__helper">
          {showHelpIcon && (
            <span className="mg-field__help-icon">
              <Icon name="feedback/info-circle-gen1" />
            </span>
          )}
          {helpText && <span className="mg-field__help-text">{helpText}</span>}
          {counterText && <span className="mg-field__counter">{counterText}</span>}
        </div>
      )}
    </div>
  );
};

export default Field;
