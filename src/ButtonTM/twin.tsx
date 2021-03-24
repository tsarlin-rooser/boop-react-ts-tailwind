import tw, { styled } from 'twin.macro';
const base = 'rounded';

const regular = tw`px-s py-xs`;
const large = tw`px-m py-s`;

const primary = tw`text-white bg-blue-3`;
const secondary = ``;
const tertiary = ``;
const destructive = ``;

const StyledButton = styled.button(({ size, variant }) => [
  base,
  size === 'regular' ? regular : large,
  function () {
    switch(variant) {
      case('primary'): return primary;
      case('secondary'): return secondary;
      case('tertiary'): return tertiary;
      case('destructive'): return destructive;
      default: return primary;
    }
  }(),
]);

export default StyledButton