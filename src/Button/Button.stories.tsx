import React from 'react';
import { Meta, Story, storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
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

SCButton.args = { text: 'Button' };

// storiesOf('Button', module)
//   .addDecorator(withKnobs)
//   .add('Default', () => (
//     <div>
//       <Button onClick={() => alert('primary button was clicked!')} text="primary" />
//       <br />
//       <Button onClick={() => alert('secondary button was clicked!')} text="secondary" variant="secondary" />
//     </div>
//   ))