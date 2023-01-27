import DeleteIcon from '@mui/icons-material/Delete';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { CircleBoxElement } from './CircleBoxElement';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/CircleBox',
  component: CircleBoxElement,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {},
} as ComponentMeta<typeof CircleBoxElement>;

const CircleBox: ComponentStory<typeof CircleBoxElement> = (args) => {
  return <CircleBoxElement {...args} />;
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CircleBoxElement> = (args) => (
  <CircleBox {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: '股関節\n膝・足',
  icon: DeleteIcon,
  active: false,
};
