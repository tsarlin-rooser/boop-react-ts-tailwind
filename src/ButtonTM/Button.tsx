import 'twin.macro';
import React, { FC } from 'react';
import StyledButton from './twin';

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
  size = 'regular',
  text,
  variant = 'primary',
}) => {
  return (
    <StyledButton onClick={onClick} size={size} variant={variant}>
      {text}
    </StyledButton>
  );
};

Button.displayName = 'ButtonTM';
