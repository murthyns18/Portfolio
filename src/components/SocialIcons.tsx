import { IconProps } from '../types/portfolio';

export function Linkedin({ size = 18, className = '', style = {} }: IconProps) {
  return (
    <i
      className={`fa-brands fa-linkedin ${className}`}
      style={{ fontSize: `${size}px`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', ...style }}
    />
  );
}

export function Github({ size = 18, className = '', style = {} }: IconProps) {
  return (
    <i
      className={`fa-brands fa-github ${className}`}
      style={{ fontSize: `${size}px`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', ...style }}
    />
  );
}
