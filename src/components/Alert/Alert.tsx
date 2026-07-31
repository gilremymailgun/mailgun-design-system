import React from 'react';
import './Alert.css';

export type AlertType = 'critical' | 'warning';

export interface AlertProps {
  type?: AlertType;
  children: React.ReactNode;
  className?: string;
}

export const Alert = ({ type = 'critical', children, className }: AlertProps) => {
  const classes = ['mg-alert', `mg-alert--${type}`, className || ''].filter(Boolean).join(' ');

  return (
    <div className={classes} role="alert">
      <p className="mg-alert__text">{children}</p>
    </div>
  );
};

export default Alert;
