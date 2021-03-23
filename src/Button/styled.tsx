import styled from 'styled-components';

type ButtonSizes = 'regular' | 'large';
type ButtonVariants = 'primary' | 'secondary' | 'tertiary' | 'destructive';

export interface StyledButtonProps {
  size?: ButtonSizes;
  variant?: ButtonVariants;
}

export const StyledButton = styled.button.attrs(
  ({ size, variant }: StyledButtonProps) => {
    const primary = 'text-white bg-blue3';
    const secondary = 'text-blue3 bg-transparent border-1 border-blue3';
    return {
      className: `px-s py-xs rounded ${variant === 'primary' ? primary : secondary}`,
    };
  }
)<StyledButtonProps>``;
