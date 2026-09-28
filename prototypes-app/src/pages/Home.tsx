import { Page } from '@ds/patterns/Page/Page';
import './Home.css';

interface PrototypeLink {
  href: string;
  title: string;
  description: string;
}

const prototypes: PrototypeLink[] = [
  {
    href: '/dashboard',
    title: 'Mailgun dashboard',
    description: 'Email performance, domain health, and recent sending activity.',
  },
  {
    href: '/get-started-guide',
    title: 'Get started guide',
    description: 'Onboarding page walking new users through initial account setup.',
  },
];

export const Home = () => (
  <Page pageHeaderProps={{ title: 'Prototypes' }}>
    <ul className="proto-home-list">
      {prototypes.map((p) => (
        <li key={p.href}>
          <a className="proto-home-list__item" href={`${import.meta.env.BASE_URL}#${p.href}`}>
            <span className="proto-home-list__title">{p.title}</span>
            <span className="proto-home-list__description">{p.description}</span>
          </a>
        </li>
      ))}
    </ul>
  </Page>
);

export default Home;
