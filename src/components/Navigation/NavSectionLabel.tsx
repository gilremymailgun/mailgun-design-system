import React from 'react';
import './Navigation.css';

interface NavSectionLabelProps {
  label: string;
}

export const NavSectionLabel = ({ label }: NavSectionLabelProps) => (
  <div className="nav-section-label">{label}</div>
);

export default NavSectionLabel;
