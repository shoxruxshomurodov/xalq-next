import clsx from 'clsx';
import React, { ReactElement, ReactNode } from 'react';
import { Shape, Size, Variant } from '../../enums';

interface ButtonProps {
  variant?: Variant;
  size?: Size,
  shape?: Shape,
  className?: string;
  children?: ReactNode | ReactElement
}

const SIZE_MAPS: Record<Size, string> = {
  [Size.small]: 'px-2.5 text-xs',
  [Size.large]: 'px-3 text-lg',
  [Size.middle]: 'px-5 py-2.5 text-sm',
};

const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.outlined]: 'border',
  [Variant.dashed]: 'bg-yellow-100 text-yellow-800',
  [Variant.danger]: 'bg-green-100 text-green-800',
  [Variant.link]: 'bg-blue-100 text-blue-800',
  [Variant.primary]: 'bg-primary-300 text-white',
  [Variant.secondary]: 'bg-blue-100 text-blue-800',
  [Variant.success]: 'bg-blue-100 text-blue-800',
  [Variant.warning]: 'bg-blue-100 text-blue-800',
  [Variant.default]: '',
};

const SHAPES_MAPS: Record<Shape, string> = {
  [Shape.circle]: 'rounded-full',
  [Shape.round]: 'rounded',
};

const Button: React.FC<ButtonProps> = ({ variant, size, shape, className = '', children }) => {

  return (
    <button
      className={clsx(
        'font-normal',
        className,
        variant && VARIANT_MAPS[variant],
        size && SIZE_MAPS[size],
        shape && SHAPES_MAPS[shape],
      )}
    >
      {children}
    </button>
  );
};
Button.defaultProps = {
  variant: Variant.primary,
  size: Size.middle,
  className: '',
  shape: Shape.round,
};
export default Button;
