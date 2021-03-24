import React, { FC } from 'react';
import { StyledButton } from './styled';

export type ButtonSizes = 'regular' | 'large';
export type ButtonVariants = 'primary' | 'secondary' | 'tertiary' | 'destructive';
export interface ButtonProps {
  disabled?: boolean;
  onClick: () => any;
  text: string;
  size?: ButtonSizes;
  variant?: ButtonVariants;
}

export const Button: FC<ButtonProps> = ({
  disabled = false,
  onClick,
  size = 'regular',
  text,
  variant = 'primary',
}) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick} size={size} variant={variant}>
      {text}
    </StyledButton>
  );
};

Button.displayName = 'ButtonSC';
