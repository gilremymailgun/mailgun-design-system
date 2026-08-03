import React from 'react';
import { Icon } from '../../icons/Icon';
import { Avatar } from '../Avatar/Avatar';
import { Badge } from '../Badge/Badge';
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
}: HeaderBarProps) => (
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

    <button type="button" className="mg-header-bar__account" onClick={onAccountClick}>
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
  </div>
);

export default HeaderBar;
