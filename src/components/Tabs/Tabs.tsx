import React, { useState } from 'react';
import './Tabs.css';

// ── Tab item definition ───────────────────────────────────────────────────────

export interface TabItem {
  id: string;
  label: string;
  supportingText?: string;
  disabled?: boolean;
}

// ── Props ─────────────────────────────────────────────────────────────────────

export interface TabsProps {
  /** List of tab items to render */
  tabs: TabItem[];
  /** ID of the initially selected tab */
  defaultActiveId?: string;
  /** Controlled active tab ID */
  activeId?: string;
  /** Callback fired when the active tab changes */
  onChange?: (id: string) => void;
  /** Show supporting text (count, badge) next to label */
  showSupportingText?: boolean;
}

// ── Component ─────────────────────────────────────────────────────────────────

export const Tabs = ({
  tabs,
  defaultActiveId,
  activeId: controlledActiveId,
  onChange,
  showSupportingText = false,
}: TabsProps) => {
  const [internalActiveId, setInternalActiveId] = useState<string>(
    defaultActiveId ?? tabs[0]?.id ?? ''
  );

  const activeId = controlledActiveId ?? internalActiveId;

  const handleClick = (id: string) => {
    setInternalActiveId(id);
    onChange?.(id);
  };

  return (
    <div className="tabs" role="tablist" aria-label="Tabs">
      {tabs.map((tab) => {
        const isSelected = tab.id === activeId;
        const isDisabled = tab.disabled === true;

        const tabClass = [
          'tabs__tab',
          isSelected && 'tabs__tab--selected',
          isDisabled && 'tabs__tab--disabled',
        ]
          .filter(Boolean)
          .join(' ');

        return (
          <button
            key={tab.id}
            role="tab"
            type="button"
            className={tabClass}
            aria-selected={isSelected}
            aria-disabled={isDisabled}
            disabled={isDisabled}
            onClick={() => !isDisabled && handleClick(tab.id)}
          >
            <span className="tabs__tab-label">{tab.label}</span>
            {showSupportingText && tab.supportingText && (
              <span className="tabs__tab-supporting">{tab.supportingText}</span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
