import React from 'react';
import { Icon } from '../../icons/Icon';
import './Avatar.css';

export type AvatarConfiguration = 'filled' | 'outlined';
export type AvatarSize = 'small' | 'large';

export interface AvatarProps {
  configuration?: AvatarConfiguration;
  size?: AvatarSize;
  /** Initials to display. Ignored if `photoSrc` or `icon` is provided. */
  label?: string;
  /** URL of a photo to display instead of initials/icon. */
  photoSrc?: string;
  /** Show the default person icon instead of initials. Ignored if `photoSrc` is set. */
  showIcon?: boolean;
  className?: string;
  'aria-label'?: string;
}

export const Avatar = ({
  configuration = 'filled',
  size = 'small',
  label = 'AB',
  photoSrc,
  showIcon = false,
  className,
  'aria-label': ariaLabel,
}: AvatarProps) => {
  const classes = [
    'mg-avatar',
    `mg-avatar--${configuration}`,
    `mg-avatar--${size}`,
    className || '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} role="img" aria-label={ariaLabel || label}>
      {photoSrc ? (
        <img className="mg-avatar__photo" src={photoSrc} alt="" />
      ) : showIcon ? (
        <span className="mg-avatar__icon">
          <Icon name="users/user-default-gen2" />
        </span>
      ) : (
        <span className="mg-avatar__label">{label}</span>
      )}
    </div>
  );
};

export default Avatar;
