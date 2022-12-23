import clsx from 'clsx';
import React from 'react';

interface CardProps {
  children?: React.ReactNode;
  borderColor?: string;
  className?: string;
}

const Index = ({ children, className }: CardProps) => {
  return (
    <div className={clsx('rounded-default border', className)}>{children}</div>
  );
};

export default Index;
