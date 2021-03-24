import React, { FC } from 'react';
import getClassnames from './classnames';

type ButtonSizes = 'regular' | 'large';
type ButtonVariants = 'primary' | 'secondary' | 'tertiary' | 'destructive';

export interface ButtonProps {
  onClick: () => any,
  text: string;
  size?: ButtonSizes;
  variant?: ButtonVariants;
}

export const Button: FC<ButtonProps> = ({
  onClick,
  size,
  text,
  variant,
}) => {
  const className = getClassnames(size, variant);
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};
