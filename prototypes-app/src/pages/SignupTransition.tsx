import { NavLogo } from '@ds/components/Navigation/NavLogo';
import { Button } from '@ds/components/Button/Button';
import { Spinner } from '../components/Spinner';
import { SinchWordmark } from '../components/SinchWordmark';
import './SignupTransition.css';

export const SignupTransition = () => (
  <div className="signup-transition">
    <div className="signup-transition__card">
      <NavLogo />

      <Spinner size={40} />

      <div className="signup-transition__target">
        <p className="signup-transition__heading">We&rsquo;re taking you to</p>
        <SinchWordmark />
      </div>

      <p className="signup-transition__copy">
        You&rsquo;ll create your password on Sinch&rsquo;s secure login, used across all Sinch
        products.
      </p>

      <Button hierarchy="tertiary" size="small">
        Continue manually
      </Button>
    </div>
  </div>
);

export default SignupTransition;
