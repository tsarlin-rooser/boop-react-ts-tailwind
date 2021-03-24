import { classnames } from 'tailwindcss-classnames';

const sizes = {
    regular: 'px-s py-xs',
    large: 'px-m py-s',
  };

const variants = {
    primary: classnames('text-white', 'bg-blue-500'),
    secondary: classnames('text-blue-500', 'bg-transparent', 'border', 'border-2', 'border-blue-300'),
    tertiary: '',
    destructive: '',
  };

export default (size: string, variant: string) => {
  return classnames('rounded', sizes[size], variants[variant]);
};
