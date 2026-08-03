import React from 'react';
import './Footer.css';

export interface FooterLink {
  label: string;
  onClick?: () => void;
}

export interface FooterProps {
  copyrightText?: string;
  legalLinks?: FooterLink[];
  companyLinks?: FooterLink[];
  className?: string;
}

const defaultLegalLinks: FooterLink[] = [
  { label: 'Terms of Service' },
  { label: 'Privacy Policy' },
];

const defaultCompanyLinks: FooterLink[] = [
  { label: 'Jobs' },
  { label: 'Help center' },
  { label: 'Blog' },
  { label: 'Team' },
  { label: 'Twitter' },
];

export const Footer = ({
  copyrightText = `© ${new Date().getFullYear()} Mailgun Technologies, Inc.`,
  legalLinks = defaultLegalLinks,
  companyLinks = defaultCompanyLinks,
  className,
}: FooterProps) => (
  <div className={`mg-footer${className ? ` ${className}` : ''}`}>
    <div className="mg-footer__copyright-group">
      <span className="mg-footer__copyright">{copyrightText}</span>
      <div className="mg-footer__links">
        {legalLinks.map((link, i) => (
          <button key={i} type="button" className="mg-footer__link" onClick={link.onClick}>
            {link.label}
          </button>
        ))}
      </div>
    </div>
    <div className="mg-footer__links">
      {companyLinks.map((link, i) => (
        <button key={i} type="button" className="mg-footer__link" onClick={link.onClick}>
          {link.label}
        </button>
      ))}
    </div>
  </div>
);

export default Footer;
