import React from 'react';
import { Icon } from '../../icons/Icon';
import './CollapseToggle.css';

export interface CollapseToggleProps {
  collapsed?: boolean;
  onClick?: () => void;
}

export const CollapseToggle = ({ collapsed = false, onClick }: CollapseToggleProps) => (
  <button
    type="button"
    className="nav-collapse-toggle"
    onClick={onClick}
    aria-label={collapsed ? 'Expand navigation' : 'Collapse navigation'}
  >
    <Icon name={collapsed ? 'navigate/chevron-right-gen2' : 'navigate/chevron-left-gen2'} />
  </button>
);

export default CollapseToggle;
