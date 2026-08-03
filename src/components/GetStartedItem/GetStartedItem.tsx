import React from 'react';
import { Icon } from '../../icons/Icon';
import './GetStartedItem.css';

export interface GetStartedItemProps {
  label?: string;
  /** 0–100 */
  progress?: number;
  collapsed?: boolean;
  onClick?: () => void;
}

export const GetStartedItem = ({
  label = 'Get started',
  progress = 12,
  collapsed = false,
  onClick,
}: GetStartedItemProps) => {
  const radius = 12;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div
      className={`nav-get-started${collapsed ? ' nav-get-started--collapsed' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <div className="nav-get-started__left">
        <div className="nav-get-started__icon">
          <Icon name="ui/rocket-gen1" />
        </div>
        {!collapsed && <span className="nav-get-started__label">{label}</span>}
      </div>
      {!collapsed && (
        <div className="nav-get-started__progress" title={`${progress}%`}>
          <svg width="28" height="28" viewBox="0 0 28 28">
            <circle
              cx="14"
              cy="14"
              r={radius}
              fill="none"
              stroke="#dce2e5"
              strokeWidth="3"
            />
            <circle
              cx="14"
              cy="14"
              r={radius}
              fill="none"
              stroke="#25a878"
              strokeWidth="3"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              transform="rotate(-90 14 14)"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default GetStartedItem;
