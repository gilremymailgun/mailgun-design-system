import React, { useState } from 'react';
import { Icon } from '../../icons/Icon';
import { Avatar } from '../Avatar/Avatar';
import { Badge } from '../Badge/Badge';
import { AccountMenu } from '../AccountMenu/AccountMenu';
import type { AccountMenuSection, AccountMenuStat } from '../AccountMenu/AccountMenu';
import './HeaderBar.css';

export interface HeaderBarProps {
  region?: string;
  onRegionClick?: () => void;
  onAppsClick?: () => void;
  onHelpClick?: () => void;
  /** Current appearance — shows the icon for what you'd switch TO. */
  isDarkMode?: boolean;
  onThemeToggle?: () => void;
  accountName?: string;
  accountCompany?: string;
  hasSubAccountTag?: boolean;
  onAccountClick?: () => void;
  /** Passed through to the AccountMenu dropdown. See AccountMenuProps for defaults. */
  accountMenuStats?: AccountMenuStat[];
  accountMenuBadges?: string[];
  accountMenuSections?: AccountMenuSection[];
  onUpgradeClick?: () => void;
}

export const HeaderBar = ({
  region = 'US',
  onRegionClick,
  onAppsClick,
  onHelpClick,
  isDarkMode = false,
  onThemeToggle,
  accountName = 'John Doe',
  accountCompany = 'Mailgun',
  hasSubAccountTag = true,
  onAccountClick,
  accountMenuStats,
  accountMenuBadges,
  accountMenuSections,
  onUpgradeClick,
}: HeaderBarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
  <div className="mg-header-bar">
    <button type="button" className="mg-header-bar__icon-btn" onClick={onAppsClick} aria-label="Apps">
      <Icon name="navigate/apps-grid-gen2" />
    </button>

    <button type="button" className="mg-header-bar__icon-btn" onClick={onHelpClick} aria-label="Help">
      <Icon name="feedback/question-circle-gen1" />
    </button>

    <button type="button" className="mg-header-bar__region" onClick={onRegionClick}>
      <span className="mg-header-bar__flag" aria-hidden="true">
        🇺🇸
      </span>
      <span className="mg-header-bar__region-label">{region}</span>
      <span className="mg-header-bar__region-chevron">
        <Icon name="navigate/chevron-down-gen2" />
      </span>
    </button>

    <button
      type="button"
      className="mg-header-bar__icon-btn mg-header-bar__icon-btn--bordered"
      onClick={onThemeToggle}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <Icon name={isDarkMode ? 'theme/light' : 'theme/dark'} />
    </button>

    <div className="mg-header-bar__account-wrapper">
      <button
        type="button"
        className="mg-header-bar__account"
        onClick={() => {
          setMenuOpen((o) => !o);
          onAccountClick?.();
        }}
        aria-expanded={menuOpen}
        aria-haspopup="menu"
      >
        <Avatar configuration="filled" size="large" label={accountName.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase()} />
        <div className="mg-header-bar__account-text">
          <span className="mg-header-bar__account-name">{accountName}</span>
          <div className="mg-header-bar__account-sub">
            <span className="mg-header-bar__account-company">{accountCompany}</span>
            {hasSubAccountTag && <Badge configuration="filled">Subaccount</Badge>}
          </div>
        </div>
        <span className="mg-header-bar__account-chevron">
          <Icon name="navigate/chevron-down-gen2" />
        </span>
      </button>
      {menuOpen && (
        <div className="mg-header-bar__account-menu">
          <AccountMenu
            stats={accountMenuStats}
            planBadges={accountMenuBadges}
            sections={accountMenuSections}
            onUpgradeClick={onUpgradeClick}
          />
        </div>
      )}
    </div>
  </div>
  );
};

export default HeaderBar;
