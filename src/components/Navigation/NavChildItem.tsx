import React from 'react';
import './Navigation.css';

export type NavTagVariant = 'beta' | 'new';

interface NavChildItemProps {
  id: string;
  label: string;
  isActive?: boolean;
  tag?: NavTagVariant;
  href?: string;
  onClick?: () => void;
}

export const NavChildItem = ({
  id,
  label,
  isActive = false,
  tag,
  href = '#',
  onClick,
}: NavChildItemProps) => (
  <a
    className={`nav-child${isActive ? ' is-active' : ''}`}
    id={id}
    href={href}
    onClick={(e) => { e.preventDefault(); onClick?.(); }}
    aria-current={isActive ? 'page' : undefined}
  >
    <div className="nav-child__link">
      {isActive && <span className="nav-child__bar" />}
      <span className="nav-child__label">{label}</span>
      {tag && <span className={`nav-tag nav-tag--${tag}`}>{tag.toUpperCase()}</span>}
    </div>
  </a>
);

export default NavChildItem;
