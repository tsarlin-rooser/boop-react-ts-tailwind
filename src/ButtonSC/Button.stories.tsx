import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ButtonSC } from '..';

const meta: Meta = {
  title: 'Styled Component Button',
  component: ButtonSC.Button,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ButtonSC.ButtonProps> = (args) => <ButtonSC.Button {...args} />;

export const TestButton = Template.bind({});
TestButton.args = { text: 'Button' };

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
