import React from 'react';
import './AiAssistantButton.css';

export interface AiAssistantButtonProps {
  label?: string;
  collapsed?: boolean;
  onClick?: () => void;
}

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 1L9.545 6.455L15 8L9.545 9.545L8 15L6.455 9.545L1 8L6.455 6.455L8 1Z"
      fill="white"
    />
  </svg>
);

export const AiAssistantButton = ({
  label = 'AI Assistant',
  collapsed = false,
  onClick,
}: AiAssistantButtonProps) => (
  <button
    type="button"
    className={`nav-ai-assistant${collapsed ? ' nav-ai-assistant--collapsed' : ''}`}
    onClick={onClick}
    aria-label={label}
  >
    <span className="nav-ai-assistant__icon">
      <SparkleIcon />
    </span>
    {!collapsed && <span className="nav-ai-assistant__label">{label}</span>}
  </button>
);

export default AiAssistantButton;
