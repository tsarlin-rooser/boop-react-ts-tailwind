import styled from 'styled-components';

type ButtonSizes = 'regular' | 'large';
type ButtonVariants = 'primary' | 'secondary' | 'tertiary' | 'destructive';

export interface StyledButtonProps {
  size?: ButtonSizes;
  variant?: ButtonVariants;
}

const variantClasses = {
  primary: 'text-white bg-blue-3',
  secondary: 'text-blue-3 bg-transparent border border-1 border-blue-3',
  tertiary: '',
  destructive: '',
};

const sizeClasses = {
  regular: 'px-s py-xs',
  large: 'px-m py-s',
};

export const StyledButton = styled.button.attrs(
  ({ size = 'regular', variant = 'primary' }: StyledButtonProps) => {
    return {
      className: `${sizeClasses[size]} rounded ${variantClasses[variant]}`,
    };
  }
)<StyledButtonProps>``;
