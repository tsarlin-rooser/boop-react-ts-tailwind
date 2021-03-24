import styled from 'styled-components';
import { ButtonSizes, ButtonVariants } from './Button';

export interface StyledButtonProps {
  disabled?: boolean;
  size?: ButtonSizes;
  variant?: ButtonVariants;
}

export const StyledButton = styled.button.attrs(
  ({ disabled, size, variant }: StyledButtonProps) => {
    const base = 'rounded text-sm';
  
    const getVariantClassname = () => {
      const primaryClasses = 'text-white bg-blue-3 hover:bg-blue-2 focus:bg-blue-1 focus:outline-none';
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

    const getDisabledClassname = () => {
      const primary = 'bg-grey-4';
      const secondary = 'bg-transparent text-grey-3 border-grey-3';
      const tertiary= 'bg-transparent text-grey-3';
      const destructive = 'bg-transparent text-grey-3';

      switch(variant) {
        case ('primary'): return primary;
        case ('secondary'): return secondary;
        case ('tertiary'): return tertiary;
        case ('destructive'): return destructive;
        default: return primary;
      }
    }
  
    return {
      className: `${base} ${getSizeClassname()} ${getVariantClassname()} ${disabled && getDisabledClassname()}`,
    };
  }
)<StyledButtonProps>``;
