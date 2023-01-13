import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Typography } from './CommonTypography';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Typography',
  component: Typography,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'title',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'button',
        'caption',
        'overline',
      ],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'grown', 'text', 'orangeText'],
    },
  },
  args: {
    variant: 'h1',
    fontWeight: '400',
    gutterBottom: false,
    display: 'block',
  },
} as ComponentMeta<typeof Typography>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: 'Typography',
};
