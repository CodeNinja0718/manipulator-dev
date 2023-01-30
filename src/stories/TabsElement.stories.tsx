import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { TabsElement } from './TabsElement';

const TABS = [
  { label: 'Item One', component: 'This is text of item one' },
  { label: 'Item Two', component: <span>This is text of item two</span> },
];

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Tabs',
  component: TabsElement,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {},
} as ComponentMeta<typeof TabsElement>;

const CommonTabs: ComponentStory<typeof TabsElement> = (args) => {
  return <TabsElement {...args} />;
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TabsElement> = (args) => (
  <CommonTabs {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  tabs: TABS,
};
