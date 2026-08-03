import React, { useState } from 'react';
import { NavItem } from './NavItem';
import { NavChildItem } from './NavChildItem';
import { NavSectionLabel } from './NavSectionLabel';
import { NavLogo } from './NavLogo';
import { GetStartedItem } from '../GetStartedItem/GetStartedItem';
import { AiAssistantButton } from '../AiAssistantButton/AiAssistantButton';
import { CollapseToggle } from '../CollapseToggle/CollapseToggle';
import { NavIcon } from '../../icons/NavIcons';
import type { NavIconName } from '../../icons/NavIcons';
import './Navigation.css';

// ── Types ───────────────────────────────────────────────────────────────────

export type SectionId =
  | 'dashboard'
  | 'reporting'
  | 'send'
  | 'inspect'
  | 'optimize'
  | 'validate'
  | 'sms'
  | 'integrations';

export type ActiveId =
  | 'get-started'
  | 'dashboard'
  | 'reporting:metrics'
  | 'reporting:logs'
  | 'reporting:bounce'
  | 'reporting:tags'
  | 'reporting:saved'
  | 'send:domains'
  | 'send:templates'
  | 'send:suppressions'
  | 'send:webhooks'
  | 'send:ips'
  | 'send:mailing-lists'
  | 'send:domain-settings'
  | 'send:routes'
  | 'inspect:email-testing'
  | 'optimize:ai-insights'
  | 'optimize:dmarc'
  | 'optimize:health-score'
  | 'optimize:email-preview'
  | 'optimize:postmaster'
  | 'optimize:snds'
  | 'optimize:spam-trap'
  | 'optimize:bl-domains'
  | 'optimize:bl-ips'
  | 'optimize:ip-reports'
  | 'optimize:seed-lists'
  | 'validate'
  | 'sms'
  | 'integrations';

export interface NavigationMenuProps {
  /** Which top-level sections to show. Defaults to all. */
  sections?: SectionId[];
  /** Which item is selected on mount. Defaults to 'dashboard'. */
  defaultActive?: ActiveId;
  /** Callback when the active item changes. */
  onActiveChange?: (id: ActiveId) => void;
  /** Icon-only, no-label rendering for a narrow sidebar. */
  collapsed?: boolean;
  /** Called when the collapse/expand toggle is clicked. If omitted, the toggle button is not shown. */
  onToggleCollapse?: () => void;
  /** Shows the "Get started" onboarding item with a progress indicator. */
  hasGetStarted?: boolean;
  getStartedProgress?: number;
  onGetStartedClick?: () => void;
  /** Shows the gradient AI Assistant button. */
  hasAiAssistant?: boolean;
  onAiAssistantClick?: () => void;
}

// ── Constants ────────────────────────────────────────────────────────────────

const ALL_SECTIONS: SectionId[] = [
  'dashboard',
  'reporting',
  'send',
  'inspect',
  'optimize',
  'validate',
  'sms',
  'integrations',
];

const EXPANDABLE: SectionId[] = ['reporting', 'send', 'inspect', 'optimize'];

// ── Component ────────────────────────────────────────────────────────────────

export const NavigationMenu = ({
  sections = ALL_SECTIONS,
  defaultActive = 'dashboard',
  onActiveChange,
  collapsed = false,
  onToggleCollapse,
  hasGetStarted = true,
  getStartedProgress = 12,
  onGetStartedClick,
  hasAiAssistant = true,
  onAiAssistantClick,
}: NavigationMenuProps) => {
  const [activeId, setActiveId] = useState<ActiveId>(defaultActive);
  const [openSections, setOpenSections] = useState<SectionId[]>(() => {
    // Auto-open the section that contains the defaultActive item
    const section = defaultActive.includes(':')
      ? (defaultActive.split(':')[0] as SectionId)
      : null;
    return section && EXPANDABLE.includes(section) ? [section] : [];
  });

  const handleActivate = (id: ActiveId) => {
    setActiveId(id);
    onActiveChange?.(id);
    // Keep only the parent section of the activated child open
    if (id.includes(':')) {
      const section = id.split(':')[0] as SectionId;
      setOpenSections([section]);
    } else {
      setOpenSections([]);
    }
  };

  const toggleSection = (id: SectionId) => {
    if (collapsed) return;
    setOpenSections((prev) =>
      prev.includes(id) ? [] : [id]
    );
  };

  const isOpen = (id: SectionId) => !collapsed && openSections.includes(id);
  const activeSection = activeId.includes(':')
    ? (activeId.split(':')[0] as SectionId)
    : (activeId as SectionId);

  const show = (id: SectionId) => sections.includes(id);

  return (
    <nav className={`nav-panel${collapsed ? ' nav-panel--collapsed' : ''}`} aria-label="Main navigation">
      <div className="nav-panel__header">
        <NavLogo collapsed={collapsed} />
        {onToggleCollapse && <CollapseToggle collapsed={collapsed} onClick={onToggleCollapse} />}
      </div>

      <div className="nav-panel__scroll">
        {hasGetStarted && (
          <GetStartedItem
            progress={getStartedProgress}
            collapsed={collapsed}
            onClick={() => {
              handleActivate('get-started' as ActiveId);
              onGetStartedClick?.();
            }}
          />
        )}

        {/* Dashboard */}
        {show('dashboard') && (
          <NavItem
            label="Dashboard"
            icon={<NavIcon name="dashboard" />}
            isActive={activeId === 'dashboard'}
            collapsed={collapsed}
            onClick={() => handleActivate('dashboard')}
          />
        )}

        {/* Reporting */}
        {show('reporting') && (
          <>
            <NavItem
              label="Reporting"
              icon={<NavIcon name="reporting" />}
              hasChevron
              hasActiveChild={activeSection === 'reporting' && activeId !== 'reporting'}
              isExpanded={isOpen('reporting')}
              collapsed={collapsed}
              onClick={() => toggleSection('reporting')}
            />
            {!collapsed && (
              <div className={`nav-children${isOpen('reporting') ? '' : ' is-hidden'}`}>
                <NavChildItem id="reporting:metrics" label="Metrics" isActive={activeId === 'reporting:metrics'} onClick={() => handleActivate('reporting:metrics')} />
                <NavChildItem id="reporting:logs" label="Logs" isActive={activeId === 'reporting:logs'} onClick={() => handleActivate('reporting:logs')} />
                <NavChildItem id="reporting:bounce" label="Bounce Classification" isActive={activeId === 'reporting:bounce'} onClick={() => handleActivate('reporting:bounce')} />
                <NavChildItem id="reporting:tags" label="Tags" tag="new" isActive={activeId === 'reporting:tags'} onClick={() => handleActivate('reporting:tags')} />
                <NavChildItem id="reporting:saved" label="Saved Reports" isActive={activeId === 'reporting:saved'} onClick={() => handleActivate('reporting:saved')} />
              </div>
            )}
          </>
        )}

        {/* Send */}
        {show('send') && (
          <>
            <NavItem
              label="Send"
              icon={<NavIcon name="send" />}
              hasChevron
              hasActiveChild={activeSection === 'send'}
              isExpanded={isOpen('send')}
              collapsed={collapsed}
              onClick={() => toggleSection('send')}
            />
            {!collapsed && (
              <div className={`nav-children${isOpen('send') ? '' : ' is-hidden'}`}>
                <NavSectionLabel label="Sending" />
                <NavChildItem id="send:domains" label="Domains" isActive={activeId === 'send:domains'} onClick={() => handleActivate('send:domains')} />
                <NavChildItem id="send:templates" label="Templates" isActive={activeId === 'send:templates'} onClick={() => handleActivate('send:templates')} />
                <NavChildItem id="send:suppressions" label="Suppressions" isActive={activeId === 'send:suppressions'} onClick={() => handleActivate('send:suppressions')} />
                <NavChildItem id="send:webhooks" label="Webhooks" isActive={activeId === 'send:webhooks'} onClick={() => handleActivate('send:webhooks')} />
                <NavChildItem id="send:ips" label="IPs" isActive={activeId === 'send:ips'} onClick={() => handleActivate('send:ips')} />
                <NavChildItem id="send:mailing-lists" label="Mailing Lists" isActive={activeId === 'send:mailing-lists'} onClick={() => handleActivate('send:mailing-lists')} />
                <NavChildItem id="send:domain-settings" label="Domain Settings" isActive={activeId === 'send:domain-settings'} onClick={() => handleActivate('send:domain-settings')} />
                <NavSectionLabel label="Receiving" />
                <NavChildItem id="send:routes" label="Routes" isActive={activeId === 'send:routes'} onClick={() => handleActivate('send:routes')} />
              </div>
            )}
          </>
        )}

        {/* Inspect */}
        {show('inspect') && (
          <>
            <NavItem
              label="Inspect"
              icon={<NavIcon name="inspect" />}
              hasChevron
              hasActiveChild={activeSection === 'inspect'}
              isExpanded={isOpen('inspect')}
              collapsed={collapsed}
              onClick={() => toggleSection('inspect')}
            />
            {!collapsed && (
              <div className={`nav-children${isOpen('inspect') ? '' : ' is-hidden'}`}>
                <NavChildItem id="inspect:email-testing" label="Email Testing" isActive={activeId === 'inspect:email-testing'} onClick={() => handleActivate('inspect:email-testing')} />
              </div>
            )}
          </>
        )}

        {/* Optimize */}
        {show('optimize') && (
          <>
            <NavItem
              label="Optimize"
              icon={<NavIcon name="optimize" />}
              hasChevron
              hasActiveChild={activeSection === 'optimize'}
              isExpanded={isOpen('optimize')}
              collapsed={collapsed}
              onClick={() => toggleSection('optimize')}
            />
            {!collapsed && (
              <div className={`nav-children${isOpen('optimize') ? '' : ' is-hidden'}`}>
                <NavChildItem id="optimize:ai-insights" label="AI Insights" tag="beta" isActive={activeId === 'optimize:ai-insights'} onClick={() => handleActivate('optimize:ai-insights')} />
                <NavChildItem id="optimize:dmarc" label="DMARC Reports" isActive={activeId === 'optimize:dmarc'} onClick={() => handleActivate('optimize:dmarc')} />
                <NavChildItem id="optimize:health-score" label="Email Health Score" isActive={activeId === 'optimize:health-score'} onClick={() => handleActivate('optimize:health-score')} />
                <NavChildItem id="optimize:email-preview" label="Email Preview" isActive={activeId === 'optimize:email-preview'} onClick={() => handleActivate('optimize:email-preview')} />
                <NavChildItem id="optimize:postmaster" label="Google Postmaster" isActive={activeId === 'optimize:postmaster'} onClick={() => handleActivate('optimize:postmaster')} />
                <NavChildItem id="optimize:snds" label="Microsoft SNDS" isActive={activeId === 'optimize:snds'} onClick={() => handleActivate('optimize:snds')} />
                <NavChildItem id="optimize:spam-trap" label="Spam Trap Monitoring" isActive={activeId === 'optimize:spam-trap'} onClick={() => handleActivate('optimize:spam-trap')} />
                <NavSectionLabel label="Blocklist Monitoring" />
                <NavChildItem id="optimize:bl-domains" label="Domains" isActive={activeId === 'optimize:bl-domains'} onClick={() => handleActivate('optimize:bl-domains')} />
                <NavChildItem id="optimize:bl-ips" label="IPs" isActive={activeId === 'optimize:bl-ips'} onClick={() => handleActivate('optimize:bl-ips')} />
                <NavSectionLabel label="Inbox Placement" />
                <NavChildItem id="optimize:ip-reports" label="Reports" isActive={activeId === 'optimize:ip-reports'} onClick={() => handleActivate('optimize:ip-reports')} />
                <NavChildItem id="optimize:seed-lists" label="Seed Lists" isActive={activeId === 'optimize:seed-lists'} onClick={() => handleActivate('optimize:seed-lists')} />
              </div>
            )}
          </>
        )}

        {/* Validate */}
        {show('validate') && (
          <NavItem
            label="Validate"
            icon={<NavIcon name="validate" />}
            isActive={activeId === 'validate'}
            collapsed={collapsed}
            onClick={() => handleActivate('validate')}
          />
        )}

        {/* SMS */}
        {show('sms') && (
          <NavItem
            label="SMS"
            icon={<NavIcon name="sms" />}
            isActive={activeId === 'sms'}
            collapsed={collapsed}
            onClick={() => handleActivate('sms')}
          />
        )}

        {/* Integrations */}
        {show('integrations') && (
          <NavItem
            label="Integrations"
            icon={<NavIcon name="integrations" />}
            isExternal
            isActive={activeId === 'integrations'}
            collapsed={collapsed}
            onClick={() => handleActivate('integrations')}
          />
        )}
      </div>

      {hasAiAssistant && (
        <div className="nav-panel__footer">
          <AiAssistantButton collapsed={collapsed} onClick={onAiAssistantClick} />
        </div>
      )}
    </nav>
  );
};

export default NavigationMenu;
