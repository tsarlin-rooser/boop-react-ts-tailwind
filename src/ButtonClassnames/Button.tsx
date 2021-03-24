import React, { FC } from 'react';
import getClassName from './classnames';

type ButtonSizes = 'regular' | 'large';
type ButtonVariants = 'primary' | 'secondary' | 'tertiary' | 'destructive';

export interface ButtonProps {
  onClick: () => any;
  size: ButtonSizes;
  text: string;
  variant: ButtonVariants;
}

export const Button: FC<ButtonProps> = ({
  onClick,
  size = 'regular',
  text,
  variant = 'primary',
}) => {
  const className = getClassName(size, variant);
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};