import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '..';

const meta: Meta = {
  title: 'Button',
  component: Button,
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

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const SCButton = Template.bind({});

SCButton.args = { text: 'Label' };
