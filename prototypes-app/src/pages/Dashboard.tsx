import { Page } from '@ds/patterns/Page/Page';
import { GetStartedGuideContent } from './GetStartedGuide';

interface DashboardProps {
  scoreMode?: 'reveal' | 'guess';
}

export const Dashboard = ({ scoreMode = 'reveal' }: DashboardProps) => (
  <Page
    navigationProps={{ defaultActive: 'dashboard' }}
    headerProps={{ accountName: 'Bob', accountCompany: 'Acme, Inc.', hasSubAccountTag: false }}
    pageHeaderProps={{
      title: 'Good morning, Bob!',
    }}
  >
    <GetStartedGuideContent emailHealthScoreMode={scoreMode} />
  </Page>
);

export default Dashboard;