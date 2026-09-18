import { Home } from './pages/Home';
import { SignupTransition } from './pages/SignupTransition';
import { GetStartedGuide } from './pages/GetStartedGuide';

// Plain pathname switch, no router — links are regular <a> tags (full page loads).
// Fine for a handful of prototype pages; add a router if this grows past that.
export const App = () => {
  switch (window.location.pathname) {
    case '/signup-transition':
      return <SignupTransition />;
    case '/get-started-guide':
      return <GetStartedGuide />;
    default:
      return <Home />;
  }
};

export default App;
