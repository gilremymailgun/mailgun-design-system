import React from 'react';
import { StatusDot, StatusDotType } from '../StatusDot/StatusDot';
import './Badge.css';

export type BadgeConfiguration = 'filled' | 'outline';

export interface BadgeProps {
  children: React.ReactNode;
  configuration?: BadgeConfiguration;
  /** Optional icon element, e.g. <Icon name="..." /> */
  icon?: React.ReactNode;
  /** Optional status dot shown before the label. */
  dotStatus?: StatusDotType;
  /** Optional notification dot shown at the top-right corner. */
  notificationStatus?: StatusDotType;
  className?: string;
}

export const Badge = ({
  children,
  configuration = 'filled',
  icon,
  dotStatus,
  notificationStatus,
  className,
}: BadgeProps) => {
  const classes = ['mg-badge', `mg-badge--${configuration}`, className || ''].filter(Boolean).join(' ');
  return (
    <div className={classes}>
      {icon && <span className="mg-badge__icon">{icon}</span>}
      {dotStatus && <StatusDot type={dotStatus} />}
      <span className="mg-badge__text">{children}</span>
      {notificationStatus && (
        <span className="mg-badge__notification">
          <StatusDot type={notificationStatus} />
        </span>
      )}
    </div>
  );
};

export default Badge;
