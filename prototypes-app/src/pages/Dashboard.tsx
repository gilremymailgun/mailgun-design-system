import { Page } from '@ds/patterns/Page/Page';
import { GetStartedGuideContent } from './GetStartedGuide';

export const Dashboard = () => (
  <Page
    navigationProps={{ defaultActive: 'dashboard' }}
    headerProps={{ accountName: 'Bob', accountCompany: 'Acme, Inc.', hasSubAccountTag: false }}
    pageHeaderProps={{
      title: 'Good morning, Bob!',
    }}
  >
    <GetStartedGuideContent />
  </Page>
);

export default Dashboard;