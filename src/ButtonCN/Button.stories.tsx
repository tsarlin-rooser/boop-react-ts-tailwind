import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ButtonCN } from '..';

const meta: Meta = {
  title: 'Buttons/Classnames',
  component: ButtonCN.Button,
  argTypes: {
    variant: { control: 'text' },
  },
  parameters: {
    docs: { page: null },
  }
};

export default meta;

const Template: Story<ButtonCN.ButtonProps> = (args) => <ButtonCN.Button {...args} />;

export const RegularPrimary = Template.bind({});
RegularPrimary.args = { text: 'primary', variant: 'primary' };

export const RegularSecondary = Template.bind({});
RegularSecondary.args = { text: 'secondary', variant: 'secondary' };

export const RegularTertiary = Template.bind({});
RegularTertiary.args = { text: 'tertiary', variant: 'tertiary' };

export const RegularDestructive = Template.bind({});
RegularDestructive.args = { text: 'destructive', variant: 'destructive' }

export const LargePrimary = Template.bind({});
LargePrimary.args = { text: 'primary', variant: 'primary', size: 'large' };

export const LargeSecondary = Template.bind({});
LargeSecondary.args = { text: 'secondary', variant: 'secondary', size: 'large' };

export const LargeTertiary = Template.bind({});
LargeTertiary.args = { text: 'tertiary', variant: 'tertiary', size: 'large' };

export const LargeDestructive = Template.bind({});
LargeDestructive.args = { text: 'destructive', variant: 'destructive', size: 'large' }
