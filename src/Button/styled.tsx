import styled from 'styled-components';

type ButtonSizes = 'regular' | 'large';
type ButtonVariants = 'primary' | 'secondary' | 'tertiary' | 'destructive';

export interface StyledButtonProps {
  size?: ButtonSizes;
  variant?: ButtonVariants;
}

export const StyledButton = styled.button.attrs(
  ({ size, variant }: StyledButtonProps) => {
    return {
      className: `px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-red-300 to-blue-300 hover:from-pink-400 hover:to-indigo-400`,
    };
  }
)<StyledButtonProps>``;
