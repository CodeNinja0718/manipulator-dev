import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Button } from './CommonButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: { control: 'select', options: ['xs', 'small', 'medium', 'large'] },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'orange', 'warning', 'info'],
    },
  },
  args: {
    size: 'small',
    variant: 'contained',
    disabled: false,
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: 'Button',
  color: 'secondary',
  sx: { width: 200 },
};

export const EndiconButton = Template.bind({});
EndiconButton.args = {
  label: 'Button',
  color: 'secondary',
  sx: { width: 200 },
  endIcon: <ArrowForwardIosIcon fontSize="small" />,
};

export const ColorButton = Template.bind({});
ColorButton.args = {
  label: 'Button',
  color: 'orange',
  sx: { width: 200 },
};

export const DisableButton = Template.bind({});
DisableButton.args = {
  label: 'Disable Button',
  disabled: true,
};

export const WidthButton = Template.bind({});
WidthButton.args = {
  label: 'Width Button',
  color: 'secondary',
  sx: { width: 200 },
};
