import React from 'react';
import './Menu.css';

// ── Types ─────────────────────────────────────────────────────────────────────

export interface MenuItem {
  id: string;
  label: string;
  subLabel?: string;
  type?: 'default' | 'title' | 'separator' | 'button';
  disabled?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  badge?: string;
  onClick?: () => void;
}

export interface MenuProps {
  items: MenuItem[];
  width?: number;
}

// ── Sub-components ────────────────────────────────────────────────────────────

const MenuTitle = ({ label }: { label: string }) => (
  <div className="menu-title">{label}</div>
);

const MenuSeparator = () => <div className="menu-separator" />;

const MenuButton = ({ label, onClick }: { label: string; onClick?: () => void }) => (
  <div className="menu-button-wrap">
    <button className="menu-button" type="button" onClick={onClick}>
      {label}
    </button>
  </div>
);

const MenuItem = ({
  label,
  subLabel,
  disabled,
  leadingIcon,
  trailingIcon,
  badge,
  onClick,
}: Omit<MenuItem, 'id' | 'type'>) => (
  <div
    className={`menu-item${disabled ? ' menu-item--disabled' : ''}`}
    onClick={!disabled ? onClick : undefined}
    role="menuitem"
    aria-disabled={disabled}
  >
    <div className="menu-item__content">
      {leadingIcon && <div className="menu-item__leading-icon">{leadingIcon}</div>}
      <div className="menu-item__text">
        <span className="menu-item__label">{label}</span>
        {subLabel && <span className="menu-item__sublabel">{subLabel}</span>}
      </div>
      {badge && <span className="menu-item__badge">{badge}</span>}
    </div>
    {trailingIcon && <div className="menu-item__trailing-icon">{trailingIcon}</div>}
  </div>
);

// ── Chevron right SVG ─────────────────────────────────────────────────────────

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ── Menu ──────────────────────────────────────────────────────────────────────

export const Menu = ({ items, width = 254 }: MenuProps) => (
  <div className="menu" style={{ width }} role="menu">
    <div className="menu__inner">
      {items.map((item) => {
        if (item.type === 'title') {
          return <MenuTitle key={item.id} label={item.label} />;
        }
        if (item.type === 'separator') {
          return <MenuSeparator key={item.id} />;
        }
        if (item.type === 'button') {
          return <MenuButton key={item.id} label={item.label} onClick={item.onClick} />;
        }
        return (
          <MenuItem
            key={item.id}
            label={item.label}
            subLabel={item.subLabel}
            disabled={item.disabled}
            leadingIcon={item.leadingIcon}
            trailingIcon={item.trailingIcon ?? <ChevronRight />}
            badge={item.badge}
            onClick={item.onClick}
          />
        );
      })}
    </div>
  </div>
);

export default Menu;
