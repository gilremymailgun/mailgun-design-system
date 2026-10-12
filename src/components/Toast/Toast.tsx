import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Icon } from '../../icons/Icon';
import './Toast.css';

export type ToastType = 'default' | 'error';

export interface ToastProps {
  type?: ToastType;
  children: React.ReactNode;
  onClose: () => void;
}

const iconByType: Record<ToastType, string> = {
  default: 'feedback/success-gen2',
  error: 'feedback/error-gen2',
};

export const Toast = ({ type = 'default', children, onClose }: ToastProps) => {
  useEffect(() => {
    const timeout = window.setTimeout(onClose, 5000);
    return () => window.clearTimeout(timeout);
  }, [onClose]);

  return createPortal(
    <div className={`mg-toast mg-toast--${type}`} role={type === 'error' ? 'alert' : 'status'}>
      <span className="mg-toast__icon">
        <Icon name={iconByType[type]} size={20} />
      </span>
      <p className="mg-toast__message">{children}</p>
      <button type="button" className="mg-toast__close" onClick={onClose} aria-label="Dismiss notification">
        <Icon name="navigate/close-small-gen2" size={16} />
      </button>
    </div>,
    document.body,
  );
};

export default Toast;
