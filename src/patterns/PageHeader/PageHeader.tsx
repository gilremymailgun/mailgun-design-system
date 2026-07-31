import React from 'react';
import { Breadcrumb, BreadcrumbItemData } from '../../components/Breadcrumb/Breadcrumb';
import { Button } from '../../components/Button/Button';
import { Field } from '../../components/Field/Field';
import { Icon } from '../../icons/Icon';
import { PageHeaderDomain } from '../PageHeaderDomain/PageHeaderDomain';
import './PageHeader.css';

export interface PageHeaderProps {
  title: string;
  breadcrumbItems?: BreadcrumbItemData[];
  description?: string;
  domain?: string;
  onDomainChange?: (value: string) => void;
  /** Right-side search/filter input value. */
  inputValue?: string;
  inputPlaceholder?: string;
  onInputChange?: (value: string) => void;
  onCopy?: () => void;
  onMore?: () => void;
  secondaryButtonLabel?: string;
  onSecondaryClick?: () => void;
  primaryButtonLabel?: string;
  onPrimaryClick?: () => void;
  /** e.g. "You've used 2,153 of 20,000 validations" */
  infoText?: string;
  className?: string;
}

export const PageHeader = ({
  title,
  breadcrumbItems,
  description,
  domain,
  onDomainChange,
  inputValue,
  inputPlaceholder = 'acme.com',
  onInputChange,
  onCopy,
  onMore,
  secondaryButtonLabel,
  onSecondaryClick,
  primaryButtonLabel,
  onPrimaryClick,
  infoText,
  className,
}: PageHeaderProps) => {
  const classes = ['mg-page-header', className || ''].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className="mg-page-header__left">
        {breadcrumbItems && <Breadcrumb type="default" items={breadcrumbItems} />}
        <div className="mg-page-header__title-row">
          <h1 className="mg-page-header__title">{title}</h1>
          {domain !== undefined && (
            <PageHeaderDomain value={domain} onChange={onDomainChange} />
          )}
        </div>
        {description && <p className="mg-page-header__description">{description}</p>}
      </div>

      <div className="mg-page-header__right">
        <div className="mg-page-header__actions">
          {inputValue !== undefined && (
            <Field
              value={inputValue}
              placeholder={inputPlaceholder}
              onChange={onInputChange}
              size="small"
              showTrailingIcon
              className="mg-page-header__field"
            />
          )}
          {onCopy && (
            <Button hierarchy="tertiary" size="small" iconPosition="only" icon={<Icon name="document/copy-gen1" />} onClick={onCopy} aria-label="Copy" />
          )}
          {(secondaryButtonLabel || primaryButtonLabel) && (
            <div className="mg-page-header__button-group">
              {secondaryButtonLabel && (
                <Button hierarchy="secondary" size="default" onClick={onSecondaryClick}>
                  {secondaryButtonLabel}
                </Button>
              )}
              {primaryButtonLabel && (
                <Button
                  hierarchy="primary"
                  size="default"
                  iconPosition="trailing"
                  icon={<Icon name="navigate/point-down-gen2" />}
                  onClick={onPrimaryClick}
                >
                  {primaryButtonLabel}
                </Button>
              )}
            </div>
          )}
          {onMore && (
            <Button
              hierarchy="tertiary"
              size="small"
              iconPosition="only"
              icon={<Icon name="navigate/more-gen2" />}
              onClick={onMore}
              aria-label="More"
            />
          )}
        </div>
        {infoText && (
          <div className="mg-page-header__info">
            <p className="mg-page-header__info-text">{infoText}</p>
            <span className="mg-page-header__info-icon">
              <Icon name="feedback/info-circle-gen1" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
