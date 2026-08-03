import React from 'react';
import { Icon } from '../../icons/Icon';
import { Badge } from '../Badge/Badge';
import './AccountMenu.css';

export interface AccountMenuStat {
  label: string;
  value: string;
}

export interface AccountMenuItem {
  label: string;
  hasExternalIcon?: boolean;
  onClick?: () => void;
}

export interface AccountMenuSection {
  title: string;
  items: AccountMenuItem[];
}

export interface AccountMenuProps {
  stats?: AccountMenuStat[];
  planBadges?: string[];
  onUpgradeClick?: () => void;
  sections?: AccountMenuSection[];
}

const defaultSections: AccountMenuSection[] = [
  {
    title: 'Account Settings',
    items: [
      { label: 'Manage my Sinch ID', hasExternalIcon: true },
      { label: 'Manage Account' },
      { label: 'Plan & Billing' },
      { label: 'Usage' },
      { label: 'API Security', hasExternalIcon: true },
      { label: 'IP Access Management', hasExternalIcon: true },
      { label: 'Subaccounts', hasExternalIcon: true },
      { label: 'User Management', hasExternalIcon: true },
    ],
  },
  {
    title: 'Send Settings',
    items: [
      { label: 'Dedicated IPs', hasExternalIcon: true },
      { label: 'IP Pools' },
      { label: 'Slack Integration' },
    ],
  },
  {
    title: 'Optimize Settings',
    items: [{ label: 'IP Monitoring' }, { label: 'Domain Monitoring' }],
  },
  {
    title: 'Inspect Settings',
    items: [
      { label: 'User Accounts' },
      { label: 'Preview Profiles' },
      { label: 'Support' },
      { label: 'Logout' },
    ],
  },
];

export const AccountMenu = ({
  stats = [
    { label: 'Emails sent:', value: '0 / 1,000' },
    { label: 'Email preview:', value: '960 / 4K' },
    { label: 'Inbox placement:', value: '5 / 100' },
    { label: 'Validations:', value: '2.2K / 20K' },
  ],
  planBadges = ['Send plan: Scale 100k', 'Optimize plan: Standard', 'Inspect plan: Contract'],
  onUpgradeClick,
  sections = defaultSections,
}: AccountMenuProps) => (
  <div className="mg-account-menu">
    <div className="mg-account-menu__stats">
      {stats.map((stat, i) => (
        <div key={i} className="mg-account-menu__stat">
          <span className="mg-account-menu__stat-label">{stat.label}</span>
          <span className="mg-account-menu__stat-value">{stat.value}</span>
        </div>
      ))}
    </div>

    <div className="mg-account-menu__badges">
      {planBadges.map((badge, i) => (
        <Badge key={i} configuration="filled">
          {badge}
        </Badge>
      ))}
    </div>

    <button type="button" className="mg-account-menu__upgrade" onClick={onUpgradeClick}>
      Upgrade plan
    </button>

    {sections.map((section, i) => (
      <div key={i} className="mg-account-menu__section">
        <p className="mg-account-menu__section-title">{section.title}</p>
        <div className="mg-account-menu__section-items">
          {section.items.map((item, j) => (
            <button
              key={j}
              type="button"
              className="mg-account-menu__item"
              onClick={item.onClick}
            >
              <span className="mg-account-menu__item-label">{item.label}</span>
              {item.hasExternalIcon && (
                <span className="mg-account-menu__item-icon">
                  <Icon name="ui/new-tab-gen2" />
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default AccountMenu;
