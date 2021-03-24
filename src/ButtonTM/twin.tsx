import tw, { styled } from 'twin.macro';

const base = tw`rounded text-sm`;
const regular = tw`px-2 py-1.5`;
const large = tw`px-3 py-2.5`;
const primary = tw`text-white bg-blue-500`;
const secondary = tw`text-blue-500 bg-white border border-2 border-blue-500`;
const tertiary = tw`text-blue-500 bg-white border-none`;
const destructive = tw`text-red-500 bg-white border-none`;


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