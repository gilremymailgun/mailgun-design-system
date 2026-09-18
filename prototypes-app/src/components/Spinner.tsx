import './Spinner.css';

export interface SpinnerProps {
  size?: number;
  className?: string;
}

export const Spinner = ({ size = 40, className }: SpinnerProps) => (
  <span
    className={['proto-spinner', className || ''].filter(Boolean).join(' ')}
    style={{ width: size, height: size }}
    role="status"
    aria-label="Loading"
  />
);

export default Spinner;
