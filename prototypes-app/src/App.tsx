import { Home } from './pages/Home';
import { SignupTransition } from './pages/SignupTransition';
import { GetStartedGuide } from './pages/GetStartedGuide';
import { Dashboard } from './pages/Dashboard';

// Hash routes keep the prototype refresh-safe under GitHub Pages subpaths.
export const App = () => {
  const hashPath = window.location.hash.slice(1);
  const pathname = hashPath || window.location.pathname.replace(import.meta.env.BASE_URL, '/') || '/';

  switch (pathname) {
    case '/dashboard':
      return <Dashboard />;
    case '/signup-transition':
      return <SignupTransition />;
    case '/get-started-guide':
      return <GetStartedGuide />;
    default:
      return <Home />;
  }
};

export default App;
