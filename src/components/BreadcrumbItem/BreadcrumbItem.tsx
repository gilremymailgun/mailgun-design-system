import React from 'react';
import { Icon } from '../../icons/Icon';
import './BreadcrumbItem.css';

export interface BreadcrumbItemProps {
  children: React.ReactNode;
  /** Optional icon element, e.g. <Icon name="..." /> */
  icon?: React.ReactNode;
  /** Marks this as the current/final page — styled differently, not typically clickable. */
  isCurrent?: boolean;
  /** Shows a trailing chevron separator. Usually true for all but the last item. */
  showSeparator?: boolean;
  onClick?: () => void;
  className?: string;
}

export const BreadcrumbItem = ({
  children,
  icon,
  isCurrent = false,
  showSeparator = true,
  onClick,
  className,
}: BreadcrumbItemProps) => {
  const classes = [
    'mg-breadcrumb-item',
    isCurrent ? 'mg-breadcrumb-item--current' : 'mg-breadcrumb-item--default',
    className || '',
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {icon && <span className="mg-breadcrumb-item__icon">{icon}</span>}
      <span className="mg-breadcrumb-item__text">{children}</span>
    </>
  );

  return (
    <span className={classes}>
      {onClick && !isCurrent ? (
        <button type="button" className="mg-breadcrumb-item__button" onClick={onClick}>
          {content}
        </button>
      ) : (
        content
      )}
      {showSeparator && (
        <span className="mg-breadcrumb-item__separator">
          <Icon name="navigate/chevron-right-gen2" />
        </span>
      )}
    </span>
  );
};

export default BreadcrumbItem;
