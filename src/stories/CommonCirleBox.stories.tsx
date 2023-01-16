import DeleteIcon from '@mui/icons-material/Delete';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { CommonCirleBox } from './CommonCirleBox';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/CommonCirleBox',
  component: CommonCirleBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {},
} as ComponentMeta<typeof CommonCirleBox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CommonCirleBox> = (args) => (
  <CommonCirleBox {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: '股関節\n膝・足',
  icon: DeleteIcon,
  active: false,
};
