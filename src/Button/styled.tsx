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

export const StyledButton = styled.button.attrs(
  ({ variant = 'primary' }: StyledButtonProps) => {
    return {
      className: `px-s py-xs rounded ${variantClasses[variant]}`,
    };
  }
)<StyledButtonProps>``;
