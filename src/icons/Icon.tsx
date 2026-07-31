import { iconRegistry } from './icons';

export interface IconProps {
  /** Icon name, e.g. "arrows/arrow-left-gen1" */
  name: string;
  size?: number;
  className?: string;
  /** Accessible label. Omit to hide from screen readers (decorative icon). */
  title?: string;
}

export const Icon = ({ name, size = 16, className, title }: IconProps) => {
  const def = iconRegistry[name];

  if (!def) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`[Icon] Unknown icon name: "${name}"`);
    }
    return null;
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox={def.viewBox || '0 0 16 16'}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {def.paths.map((d, i) => (
        <path key={i} fill="currentColor" d={d} />
      ))}
    </svg>
  );
};

export default Icon;
