import { useEffect, useState } from 'react';
import { Home } from './pages/Home';
import { SignupTransition } from './pages/SignupTransition';
import { GetStartedGuide } from './pages/GetStartedGuide';
import { Dashboard } from './pages/Dashboard';

// Hash routes keep the prototype refresh-safe under GitHub Pages subpaths.
export const App = () => {
  const getPathname = () => window.location.hash.slice(1) || window.location.pathname.replace(import.meta.env.BASE_URL, '/') || '/';
  const [pathname, setPathname] = useState(getPathname);

  useEffect(() => {
    const handleNavigation = () => setPathname(getPathname());
    window.addEventListener('hashchange', handleNavigation);
    window.addEventListener('popstate', handleNavigation);
    return () => {
      window.removeEventListener('hashchange', handleNavigation);
      window.removeEventListener('popstate', handleNavigation);
    };
  }, []);

  switch (pathname) {
    case '/dashboard':
      return <Dashboard key="dashboard" />;
    case '/dashboard-guess':
      return <Dashboard key="dashboard-guess" scoreMode="guess" />;
    case '/signup-transition':
      return <SignupTransition />;
    case '/get-started-guide':
      return <GetStartedGuide />;
    default:
      return <Home />;
  }
};

export default App;
