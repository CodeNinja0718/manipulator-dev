import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import { CommonModalElement } from './CommonModalElement';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/CommonModal',
  component: CommonModalElement,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {},
} as ComponentMeta<typeof CommonModalElement>;

const CommonCollapse: ComponentStory<typeof CommonModalElement> = (args) => {
  return <CommonModalElement {...args} />;
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CommonModalElement> = (args) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const props = { ...args, open, onClose: handleClose };
  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <CommonCollapse {...props}>
        <>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </>
      </CommonCollapse>
    </>
  );
};

export const Default = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  iconClose: DisabledByDefaultIcon,
  isHideCloseButton: true,
  title: '整体師検索',
  titleElement: <Typography variant="title">整体師検索</Typography>,
  buttonElement: (
    <Button
      color="primary"
      variant="contained"
      sx={{ width: '100%', height: 54 }}
    >
      検索
    </Button>
  ),
};
