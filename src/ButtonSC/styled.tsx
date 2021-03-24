import styled from 'styled-components';

type ButtonSizes = 'regular' | 'large';
type ButtonVariants = 'primary' | 'secondary' | 'tertiary' | 'destructive';

export interface StyledButtonProps {
  size?: ButtonSizes;
  variant?: ButtonVariants;
}

export const StyledButton = styled.button.attrs(
  ({ size, variant }: StyledButtonProps) => {
    const base = 'rounded text-sm';
  
    const getVariantClassname = () => {
      const primaryClasses = 'text-white bg-blue-3';
      const secondaryClasses = 'text-blue-3 bg-transparent border border-2 border-blue-3';
      const tertiaryClasses = 'text-blue-3 bg-transparent border-none';
      const destructiveClasses = 'text-red-3 bg-transparent border-none';

      switch(variant) {
        case ('primary'): return primaryClasses;
        case ('secondary'): return secondaryClasses;
        case ('tertiary'): return tertiaryClasses;
        case ('destructive'): return destructiveClasses;
        default: return primaryClasses;
      }
    }

    const getSizeClassname = () => {
      const regular = 'px-s py-xs';
      const large = 'px-m py-s';
      return size === 'regular' ? regular : large;
    }
  
    return {
      className: `${base} ${getSizeClassname()} ${getVariantClassname()}`,
    };
  }
)<StyledButtonProps>``;
