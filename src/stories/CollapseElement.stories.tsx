import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { CollapseElement } from './CollapseElement';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Collapse',
  component: CollapseElement,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {},
} as ComponentMeta<typeof CollapseElement>;

const CommonCollapse: ComponentStory<typeof CollapseElement> = (args) => {
  return <CollapseElement {...args} />;
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CollapseElement> = (args) => (
  <CommonCollapse {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title:
    'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  content:
    'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
};
