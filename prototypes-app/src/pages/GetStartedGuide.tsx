import { useState } from 'react';
import { Page } from '@ds/patterns/Page/Page';

const tabs = [
  { id: 'send', label: 'Send' },
  { id: 'optimize', label: 'Optimize' },
] as const;

export const GetStartedGuide = () => {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]['id']>('send');

  return (
    <Page
      pageHeaderProps={{
        title: 'Good morning, Bob!',
      }}
    >
      <div style={{ marginTop: '12px' }}>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            borderBottom: '1px solid #dfe3e8',
            width: 'fit-content',
            minWidth: '220px',
          }}
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                style={{
                  appearance: 'none',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: isActive ? '2px solid #1b6ef3' : '2px solid transparent',
                  color: isActive ? '#1a1d29' : '#5c6470',
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontWeight: isActive ? 600 : 500,
                  padding: '10px 0 12px',
                  cursor: 'pointer',
                  minWidth: '90px',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </Page>
  );
};

export default GetStartedGuide;
