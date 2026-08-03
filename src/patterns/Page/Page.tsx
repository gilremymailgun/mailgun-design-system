import React from 'react';
import { NavigationMenu } from '../../components/Navigation/NavigationMenu';
import type { NavigationMenuProps } from '../../components/Navigation/NavigationMenu';
import { HeaderBar } from '../../components/HeaderBar/HeaderBar';
import type { HeaderBarProps } from '../../components/HeaderBar/HeaderBar';
import { PageHeader } from '../PageHeader/PageHeader';
import type { PageHeaderProps } from '../PageHeader/PageHeader';
import { Footer } from '../../components/Footer/Footer';
import type { FooterProps } from '../../components/Footer/Footer';
import './Page.css';

export interface PageProps {
  /** Props passed through to the left NavigationMenu. */
  navigationProps?: NavigationMenuProps;
  /** Props passed through to the top HeaderBar. */
  headerProps?: HeaderBarProps;
  /** Props passed through to the PageHeader (title, description, actions, etc.) */
  pageHeaderProps?: PageHeaderProps;
  /** Props passed through to the Footer. */
  footerProps?: FooterProps;
  /** The actual page content, rendered below the PageHeader. */
  children?: React.ReactNode;
}

export const Page = ({
  navigationProps,
  headerProps,
  pageHeaderProps,
  footerProps,
  children,
}: PageProps) => (
  <div className="mg-page">
    <NavigationMenu {...navigationProps} />
    <div className="mg-page__main">
      <HeaderBar {...headerProps} />
      <div className="mg-page__content">
        <PageHeader {...pageHeaderProps} />
        <div className="mg-page__slot">{children}</div>
        <Footer {...footerProps} />
      </div>
    </div>
  </div>
);

export default Page;
