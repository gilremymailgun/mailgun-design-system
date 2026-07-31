import React from 'react';
import { StatusDot } from '../StatusDot/StatusDot';
import type { StatusDotType } from '../StatusDot/StatusDot';
import { Icon } from '../../icons/Icon';
import './Tag.css';

export interface TagProps {
  children: React.ReactNode;
  /** Optional icon element, e.g. <Icon name="..." /> */
  icon?: React.ReactNode;
  /** Optional status dot shown before the label. */
  dotStatus?: StatusDotType;
  /** Called when the remove ("x") action is clicked. If omitted, no remove icon is shown. */
  onRemove?: () => void;
  className?: string;
}

export const Tag = ({ children, icon, dotStatus, onRemove, className }: TagProps) => {
  const classes = ['mg-tag', className || ''].filter(Boolean).join(' ');
  return (
    <div className={classes}>
      {icon && <span className="mg-tag__icon">{icon}</span>}
      {dotStatus && <StatusDot type={dotStatus} />}
      <span className="mg-tag__text">{children}</span>
      {onRemove && (
        <button type="button" className="mg-tag__remove" onClick={onRemove} aria-label="Remove">
          <Icon name="feedback/delete-circle-gen1" />
        </button>
      )}
    </div>
  );
};

export default Tag;
