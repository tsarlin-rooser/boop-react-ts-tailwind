import React, { FC } from 'react';
import { StyledButton, StyledButtonProps } from './styled';

export interface ButtonProps extends StyledButtonProps {
  text: string;
}

export const Button: FC<ButtonProps> = ({
  size = 'regular',
  text = 'label',
  variant = 'primary',
}) => {
  return (
    <StyledButton size={size} variant={variant}>
      {text}
    </StyledButton>
  );
};
