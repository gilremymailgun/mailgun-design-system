import React from 'react';
import './Label.css';

export interface LabelProps {
  children: React.ReactNode;
  /** Optional icon element, e.g. <Icon name="..." /> */
  icon?: React.ReactNode;
  className?: string;
}

export const Label = ({ children, icon, className }: LabelProps) => {
  const classes = ['mg-label', className || ''].filter(Boolean).join(' ');
  return (
    <div className={classes}>
      {icon && <span className="mg-label__icon">{icon}</span>}
      <span className="mg-label__text">{children}</span>
    </div>
  );
};

export default Label;
