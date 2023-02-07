import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { CommonTagsElement } from './CommonTagsElement';

const TAGS = [
  { id: 0, label: 'Item One', value: 1 },
  { id: 1, label: 'Item Two', value: 2 },
];

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/CommonTags',
  component: CommonTagsElement,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {},
} as ComponentMeta<typeof CommonTagsElement>;

const CommonTabs: ComponentStory<typeof CommonTagsElement> = (args) => {
  return <CommonTagsElement {...args} />;
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CommonTagsElement> = (args) => (
  <CommonTabs {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  data: TAGS,
  actives: [1],
};
