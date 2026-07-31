import React from 'react';
import { BreadcrumbItem } from '../BreadcrumbItem/BreadcrumbItem';
import { Icon } from '../../icons/Icon';
import './Breadcrumb.css';

export interface BreadcrumbItemData {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export interface BreadcrumbProps {
  /** Type "default" renders a list of items with chevron separators. Type "back" renders a single back-navigation link with a left-arrow icon. */
  type?: 'default' | 'back';
  items?: BreadcrumbItemData[];
  /** Only used when type="back" — the label and click handler for the single back link. */
  backLabel?: string;
  onBack?: () => void;
  className?: string;
}

export const Breadcrumb = ({
  type = 'default',
  items = [],
  backLabel = 'Back',
  onBack,
  className,
}: BreadcrumbProps) => {
  const classes = ['mg-breadcrumb', className || ''].filter(Boolean).join(' ');

  if (type === 'back') {
    return (
      <nav className={classes} aria-label="Back navigation">
        <BreadcrumbItem
          icon={<Icon name="arrows/arrow-left-gen1" />}
          isCurrent
          showSeparator={false}
          onClick={onBack}
        >
          {backLabel}
        </BreadcrumbItem>
      </nav>
    );
  }

  return (
    <nav className={classes} aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <BreadcrumbItem
            key={index}
            icon={item.icon}
            isCurrent={isLast}
            showSeparator={!isLast}
            onClick={item.onClick}
          >
            {item.label}
          </BreadcrumbItem>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
