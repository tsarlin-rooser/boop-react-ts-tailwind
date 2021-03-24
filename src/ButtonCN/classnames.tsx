import { classnames } from 'tailwindcss-classnames';

const base = classnames('rounded', 'text-sm');
const regular = classnames('px-2', 'py-1.5');
const large = classnames('px-3', 'py-2.5');
const primary = classnames('text-white', 'bg-blue-500');
const secondary = classnames('text-blue-500', 'bg-white', 'border', 'border-2', 'border-blue-500');
const tertiary = classnames('text-blue-500', 'bg-white', 'border-none');
const destructive = classnames('text-red-500', 'bg-white', 'border-none');

export default (size?: string, variant?: string) => {
  const getSizeClasses = () => size && size === 'large' ? large : regular;
  const getVariantClasses = () => {
    switch(variant) {
      case ('primary'): return primary;
      case ('secondary'): return secondary;
      case ('tertiary'): return tertiary;
      case ('destructive'): return destructive;
      default: return primary;
    }
  }
  return classnames(base, getSizeClasses(), getVariantClasses());
}