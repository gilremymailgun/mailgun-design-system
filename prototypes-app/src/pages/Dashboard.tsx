import { useEffect, useState } from 'react';
import { Page } from '@ds/patterns/Page/Page';
import { GetStartedGuideContent } from './GetStartedGuide';

interface DashboardProps {
  scoreMode?: 'reveal' | 'guess';
}

export const Dashboard = ({ scoreMode = 'reveal' }: DashboardProps) => {
  const [isNarrow, setIsNarrow] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 720px)');
    const updateNavigation = () => setIsNarrow(mediaQuery.matches);
    updateNavigation();
    mediaQuery.addEventListener('change', updateNavigation);
    return () => mediaQuery.removeEventListener('change', updateNavigation);
  }, []);

  return (
    <Page
      navigationProps={{ defaultActive: 'dashboard', collapsed: isNarrow }}
      headerProps={{ accountName: 'Bob', accountCompany: 'Acme, Inc.', hasSubAccountTag: false }}
      pageHeaderProps={{
        title: 'Good morning, Bob!',
      }}
    >
      <GetStartedGuideContent emailHealthScoreMode={scoreMode} />
    </Page>
  );
};

export default Dashboard;