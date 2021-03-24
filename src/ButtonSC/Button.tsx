import React, { FC } from 'react';
import { StyledButton, StyledButtonProps } from './styled';

export interface ButtonProps extends StyledButtonProps {
  onClick: () => any,
  text: string;
}

export const Button: FC<ButtonProps> = ({
  onClick,
  size,
  text,
  variant,
}) => {
  return (
    <StyledButton onClick={onClick} size={size} variant={variant}>
      {text}
    </StyledButton>
  );
};

Button.defaultProps = {
  size: 'regular',
  variant: 'primary',
}