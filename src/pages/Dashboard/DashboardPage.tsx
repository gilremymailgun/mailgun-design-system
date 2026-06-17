import React, { useState } from 'react';
import { NavigationMenu } from '../../components/Navigation/NavigationMenu';
import type { ActiveId } from '../../components/Navigation/NavigationMenu';
import './DashboardPage.css';

// ─── Stat Card ───────────────────────────────────────────────────────────────
interface StatCardProps {
  label: string;
  fraction: string;
  percentage: string;
  status: 'delivered' | 'failed' | 'suppressed';
}

const StatCard = ({ label, fraction, percentage, status }: StatCardProps) => (
  <div className={`stat-card stat-card--${status}`}>
    <div className="stat-card__icon" aria-hidden="true">
      <div className={`stat-card__icon-dot stat-card__icon-dot--${status}`} />
    </div>
    <div className="stat-card__content">
      <div className="stat-card__fraction">{fraction}</div>
      <div className="stat-card__label">{label}</div>
      <div className="stat-card__percentage">{percentage}</div>
    </div>
  </div>
);

// ─── Tabs ─────────────────────────────────────────────────────────────────────
interface TabsProps {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;
}

const Tabs = ({ tabs, activeTab, onChange }: TabsProps) => (
  <div className="tabs" role="tablist">
    {tabs.map((tab) => (
      <button
        key={tab}
        role="tab"
        aria-selected={tab === activeTab}
        className={`tabs__tab ${tab === activeTab ? 'tabs__tab--active' : ''}`}
        onClick={() => onChange(tab)}
        type="button"
      >
        {tab}
      </button>
    ))}
  </div>
);

// ─── Chart Placeholder ────────────────────────────────────────────────────────
const ChartPlaceholder = () => (
  <div className="chart-placeholder">
    <div className="chart-placeholder__lines">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="chart-placeholder__line" />
      ))}
    </div>
    <div className="chart-placeholder__label">Sending overview chart</div>
  </div>
);

// ─── Domain Row ───────────────────────────────────────────────────────────────
interface DomainRowProps {
  domain: string;
  region: 'us' | 'eu';
  status: 'verified' | 'unverified';
}

const DomainRow = ({ domain, region, status }: DomainRowProps) => (
  <div className="domain-row">
    <span className={`domain-row__region domain-row__region--${region}`}>{region.toUpperCase()}</span>
    <span className={`domain-row__status-dot domain-row__status-dot--${status}`} aria-label={status} />
    <a href="#" className="domain-row__name">{domain}</a>
    <button className="domain-row__menu" aria-label="More options" type="button">•••</button>
  </div>
);

// ─── Account Info Panel ───────────────────────────────────────────────────────
interface AccountInfoProps {
  name: string;
  usage: { label: string; value: string }[];
}

const AccountInfoPanel = ({ name, usage }: AccountInfoProps) => (
  <div className="account-info">
    <div className="account-info__header">
      <div>
        <div className="account-info__name">{name}</div>
        <a href="#" className="account-info__settings-link">Account Settings</a>
      </div>
      <div className="account-info__avatar" aria-hidden="true">
        {name.split(' ').map((n: string) => n[0]).join('')}
      </div>
    </div>
    <div className="account-info__plan-title">Plan details</div>
    {usage.map(({ label, value }) => (
      <div key={label} className="account-info__row">
        <span>{label}</span>
        <span>{value}</span>
      </div>
    ))}
  </div>
);

// ─── Quick Links ──────────────────────────────────────────────────────────────
const QUICK_LINKS = [
  { label: 'API keys', href: '#' },
  { label: 'Help center', href: '#' },
  { label: 'API documentation', href: '#' },
  { label: 'Postbin', href: '#' },
  { label: 'HTML email templates', href: '#' },
];

const QuickLinks = () => (
  <div className="quick-links">
    {QUICK_LINKS.map(({ label, href }) => (
      <a key={label} href={href} className="quick-links__item">{label}</a>
    ))}
  </div>
);

// ─── Header ───────────────────────────────────────────────────────────────────
const PageHeader = () => (
  <header className="page-header">
    <div className="page-header__spacer" />
    <div className="page-header__actions">
      <button className="page-header__icon-btn" aria-label="Product menu" type="button">⊞</button>
      <button className="page-header__icon-btn" aria-label="Help" type="button">?</button>
      <button className="page-header__region-btn" type="button">🇺🇸 US</button>
      <button className="page-header__theme-btn" aria-label="Switch to dark mode" type="button">☀</button>
      <button className="page-header__user-btn" type="button">
        <span className="page-header__avatar">GR</span>
        <span className="page-header__username">Gil Remy</span>
      </button>
    </div>
  </header>
);

// ─── Footer ───────────────────────────────────────────────────────────────────
const PageFooter = () => (
  <footer className="page-footer">
    <div className="page-footer__left">
      <span>© 2026 Mailgun Technologies, Inc.</span>
      <a href="#">Terms of Service</a>
      <a href="#">Privacy Policy</a>
    </div>
    <div className="page-footer__right">
      <a href="#">Jobs</a>
      <a href="#">Help center</a>
      <a href="#">Blog</a>
      <a href="#">Team</a>
      <a href="#">Twitter</a>
    </div>
  </footer>
);

// ─── Dashboard Page ───────────────────────────────────────────────────────────
export interface DashboardPageProps {
  /** Override the default active nav item */
  defaultActive?: ActiveId;
  /** User display name */
  userName?: string;
}

export const DashboardPage = ({
  defaultActive = 'dashboard',
  userName = 'Gil Remy',
}: DashboardPageProps) => {
  const [mainTab, setMainTab] = useState('Send');
  const [domainTab, setDomainTab] = useState('Sending Domains');

  return (
    <div className="dashboard-layout">

      {/* Navigation */}
      <aside className="dashboard-layout__nav">
        <NavigationMenu defaultActive={defaultActive} />
      </aside>

      <div className="dashboard-layout__main">
        <PageHeader />

        <main className="dashboard-content">
          <h1 className="dashboard-content__greeting">
            Good morning, {userName}!
          </h1>

          <Tabs
            tabs={['Send', 'Optimize']}
            activeTab={mainTab}
            onChange={setMainTab}
          />

          <div className="stat-cards">
            <StatCard label="Delivered" fraction="374 / 592" percentage="63.18%" status="delivered" />
            <StatCard label="Failed" fraction="218 / 592" percentage="36.82%" status="failed" />
            <StatCard label="Suppressed" fraction="0 / 592" percentage="0%" status="suppressed" />
          </div>

          <div className="dashboard-content__grid">

            <div className="dashboard-content__primary">
              <div className="content-card">
                <div className="content-card__header">
                  <span className="content-card__title">Sending overview</span>
                  <div className="content-card__actions">
                    <span className="date-range-placeholder">05/17/2026 → 06/17/2026</span>
                  </div>
                </div>
                <ChartPlaceholder />
                <div className="metric-toggles">
                  {['Accepted', 'Delivered', 'Failed (all)', 'Opened'].map((m) => (
                    <label key={m} className="metric-toggle">
                      <input type="checkbox" defaultChecked /> {m}
                    </label>
                  ))}
                </div>
              </div>

              <div className="content-card">
                <Tabs
                  tabs={['Sending Domains', 'Open Tickets', 'Dedicated IPs']}
                  activeTab={domainTab}
                  onChange={setDomainTab}
                />
                <div className="domain-list">
                  <DomainRow domain="app.eu.mailgun.com" region="eu" status="unverified" />
                  <DomainRow domain="eu.ptrinder.com" region="eu" status="verified" />
                  <DomainRow domain="gwehnuiofewn.com" region="us" status="unverified" />
                  <DomainRow domain="khunter.zeefarmer.com" region="us" status="verified" />
                  <DomainRow domain="mg.petertrinder.com" region="us" status="verified" />
                </div>
                <a href="#" className="domain-list__see-all">See all 11 domains</a>
              </div>
            </div>

            <div className="dashboard-content__secondary">
              <div className="content-card">
                <AccountInfoPanel
                  name={userName}
                  usage={[
                    { label: 'Mailgun plan', value: 'Scale 100k' },
                    { label: 'Email sent', value: '402 / 100,000' },
                    { label: 'Email preview', value: '507 / 4,000' },
                    { label: 'Inbox placement', value: '3 / 100' },
                    { label: 'Validations', value: '1,580 / 20,000' },
                    { label: 'Dedicated IPs', value: '5' },
                    { label: 'Log retention', value: '30 days' },
                  ]}
                />
              </div>
              <div className="content-card">
                <QuickLinks />
              </div>
            </div>

          </div>
        </main>

        <PageFooter />
      </div>
    </div>
  );
};

export default DashboardPage;
