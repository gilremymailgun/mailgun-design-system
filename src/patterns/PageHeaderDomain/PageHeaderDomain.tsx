import React, { useState } from 'react';
import { Icon } from '../../icons/Icon';
import './PageHeaderDomain.css';

export type PageHeaderDomainState = 'Default' | 'Open' | 'Edit';

export interface PageHeaderDomainProps {
  value: string;
  state?: PageHeaderDomainState;
  onChange?: (value: string) => void;
  className?: string;
}

export const PageHeaderDomain = ({
  value,
  state = 'Default',
  onChange,
  className,
}: PageHeaderDomainProps) => {
  const [internalValue, setInternalValue] = useState(value);
  const isEditing = state === 'Open' || state === 'Edit';

  const classes = ['mg-page-header-domain', className || ''].filter(Boolean).join(' ');

  if (isEditing) {
    return (
      <div className={classes}>
        <span className="mg-page-header-domain__icon">
          <Icon name="navigate/chevron-right-gen2" />
        </span>
        <input
          type="text"
          className="mg-page-header-domain__input"
          value={internalValue}
          onChange={(e) => {
            setInternalValue(e.target.value);
            onChange?.(e.target.value);
          }}
          autoFocus={state === 'Open'}
        />
      </div>
    );
  }

  return (
    <div className={classes}>
      <span className="mg-page-header-domain__icon">
        <Icon name="navigate/chevron-right-gen2" />
      </span>
      <p className="mg-page-header-domain__text">{value}</p>
    </div>
  );
};

export default PageHeaderDomain;
