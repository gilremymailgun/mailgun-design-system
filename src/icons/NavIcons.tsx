import React from 'react';
import './NavIcons.css';

export type NavIconName =
  | 'dashboard'
  | 'reporting'
  | 'send'
  | 'inspect'
  | 'optimize'
  | 'validate'
  | 'sms'
  | 'integrations';

interface NavIconProps {
  name: NavIconName;
  className?: string;
}

// Material Symbols Rounded — FILL@1, wght@400, opsz@20
const fontIcons: Record<NavIconName, string> = {
  dashboard:    'home',
  reporting:    'insert_chart',
  send:         'send',
  inspect:      'dashboard',
  optimize:     'speed',
  validate:     'mark_email_read',
  sms:          'chat',
  integrations: 'integration_instructions',
};

export const NavIcon = ({ name, className }: NavIconProps) => (
  <span
    className={`material-symbols-rounded nav-icon-font${className ? ` ${className}` : ''}`}
    aria-hidden="true"
  >
    {fontIcons[name]}
  </span>
);

export default NavIcon;
