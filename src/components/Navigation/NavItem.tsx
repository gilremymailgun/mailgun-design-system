import React from 'react';
import './Navigation.css';

interface NavItemProps {
  label: string;
  icon: React.ReactNode;
  isActive?: boolean;
  hasActiveChild?: boolean;
  isExpanded?: boolean;
  hasChevron?: boolean;
  isExternal?: boolean;
  onClick?: () => void;
}

export const NavItem = ({
  label,
  icon,
  isActive = false,
  hasActiveChild = false,
  isExpanded = false,
  hasChevron = false,
  isExternal = false,
  onClick,
}: NavItemProps) => {
  const classes = [
    'nav-item',
    isActive && 'is-active',
    hasActiveChild && 'has-active-child',
    isExpanded && 'is-expanded',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} onClick={onClick} role="button" tabIndex={0}>
      <div className="nav-item__left">
        <div className="nav-item__icon">{icon}</div>
        <span className="nav-item__label">{label}</span>
      </div>
      {(hasChevron || isExternal) && (
        <div className="nav-item__chevron">
          {isExternal ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M15.8536 0.146447C15.9015 0.194385 15.9377 0.249636 15.9621 0.308609C15.9862 0.366852 15.9988 0.428726 15.9999 0.490771L16 0.50098V7.5C16 7.77614 15.7761 8 15.5 8C15.2239 8 15 7.77614 15 7.5V1.70711L7.85355 8.85355C7.65829 9.04882 7.34171 9.04882 7.14645 8.85355C6.95118 8.65829 6.95118 8.34171 7.14645 8.14645L14.2929 1H8.5C8.22386 1 8 0.776142 8 0.5C8 0.223858 8.22386 0 8.5 0H15.4999H15.5C15.5678 0 15.6324 0.0134926 15.6914 0.0379391C15.7504 0.062339 15.8056 0.0985082 15.8536 0.146447ZM1.29289 4.29289C1.48043 4.10536 1.73478 4 2 4H6.5C6.77614 4 7 3.77614 7 3.5C7 3.22386 6.77614 3 6.5 3H2C1.46957 3 0.960859 3.21071 0.585786 3.58579C0.210714 3.96086 0 4.46957 0 5V14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H11C11.5304 16 12.0391 15.7893 12.4142 15.4142C12.7893 15.0391 13 14.5304 13 14V9.5C13 9.22386 12.7761 9 12.5 9C12.2239 9 12 9.22386 12 9.5V14C12 14.2652 11.8946 14.5196 11.7071 14.7071C11.5196 14.8946 11.2652 15 11 15H2C1.73478 15 1.48043 14.8946 1.29289 14.7071C1.10536 14.5196 1 14.2652 1 14V5C1 4.73478 1.10536 4.48043 1.29289 4.29289Z" fill="currentColor" />
            </svg>
          ) : isExpanded ? (
            // Chevron up — section is open
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M4 9L8 5L12 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            // Chevron down — section is closed
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M4 7L8 11L12 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      )}
    </div>
  );
};

export default NavItem;
