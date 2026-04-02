import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'default' | 'large' | 'full';
}

export default function Container({
  children,
  className = '',
  size = 'default',
}: ContainerProps) {
  const sizeClasses = {
    default: 'max-w-7xl',
    large: 'max-w-[1400px]',
    full: 'max-w-full',
  };

  return (
    <div className={`${sizeClasses[size]} mx-auto px-6 ${className}`}>
      {children}
    </div>
  );
}
