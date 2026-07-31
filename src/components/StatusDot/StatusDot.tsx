import React from 'react';
import './StatusDot.css';

export type StatusDotType = 'info' | 'success' | 'error' | 'warning';

export interface StatusDotProps {
  type?: StatusDotType;
  className?: string;
}

export const StatusDot = ({ type = 'success', className }: StatusDotProps) => {
  const classes = ['mg-status-dot', `mg-status-dot--${type}`, className || ''].filter(Boolean).join(' ');
  return <span className={classes} aria-hidden="true" />;
};

export default StatusDot;
