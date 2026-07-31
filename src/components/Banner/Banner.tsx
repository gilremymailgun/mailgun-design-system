import React from 'react';
import { Icon } from '../../icons/Icon';
import './Banner.css';

export type BannerType = 'info' | 'warning' | 'success' | 'error' | 'tip';

const iconByType: Record<BannerType, string> = {
  info: 'feedback/info-gen2',
  warning: 'feedback/warning-gen2',
  success: 'feedback/success-gen2',
  error: 'feedback/error-gen2',
  tip: 'ui/light-bulb-gen2',
};

export interface BannerProps {
  type?: BannerType;
  title?: string;
  children: React.ReactNode;
  /** Action buttons rendered below the description, e.g. tertiary <Button> elements. */
  actions?: React.ReactNode;
  /** Called when the close ("x") button is clicked. If omitted, no close button is shown. */
  onClose?: () => void;
  className?: string;
}

export const Banner = ({
  type = 'info',
  title,
  children,
  actions,
  onClose,
  className,
}: BannerProps) => {
  const classes = ['mg-banner', `mg-banner--${type}`, className || ''].filter(Boolean).join(' ');

  return (
    <div className={classes} role="alert">
      <div className="mg-banner__row">
        <div className="mg-banner__main">
          <span className="mg-banner__icon">
            <Icon name={iconByType[type]} />
          </span>
          <div className="mg-banner__content">
            {title && <p className="mg-banner__title">{title}</p>}
            <div className="mg-banner__body">
              <p className="mg-banner__text">{children}</p>
              {actions && <div className="mg-banner__actions">{actions}</div>}
            </div>
          </div>
        </div>
        {onClose && (
          <button type="button" className="mg-banner__close" onClick={onClose} aria-label="Close">
            <Icon name="navigate/close-small-gen2" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Banner;
