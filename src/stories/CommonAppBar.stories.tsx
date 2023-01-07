import { Box, Link, Stack, Typography } from '@mui/material';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { AppBar } from './CommonAppBar';

const navbar: any[] = [
  {
    href: '/',
    label: 'ホーム',
  },
  {
    href: '/',
    label: '新規会員登録',
  },
  {
    href: '/',
    label: 'ログイン',
  },
];

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/AppBar',
  component: AppBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {
      control: 'select',
      options: [
        'default',
        'inherit',
        'primary',
        'secondary',
        'error',
        'orange',
        'warning',
        'info',
        'transparent',
      ],
    },
    gradient: {
      control: 'select',
      options: ['orange', 'green'],
    },
  },
  args: {},
} as ComponentMeta<typeof AppBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppBar> = (args) => (
  <AppBar {...args}>
    <Box display="flex" width="100%" justifyContent="space-between">
      <Stack
        direction="row"
        width="100%"
        gap={{ xs: 1, tablet: 2 }}
        alignItems="center"
        justifyContent="inherit"
        pl={20}
        pr={20}
      >
        <Box
          sx={{
            display: 'flex',
            width: 134,
            height: 51,
            ml: 5,
          }}
          component={Link}
          href="/"
        ></Box>
        <Box display="flex" pt={15} pb={15}>
          <Stack direction="row" spacing={40} flex={1}>
            {navbar.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                target="_blank"
                rel="noreferrer"
                underline="none"
                sx={{
                  '&:hover, &:active, &:focus': {
                    opacity: 0.75,
                    transition: '0.5s',
                  },
                }}
              >
                <Typography fontWeight={500} color="white">
                  {section.label}
                </Typography>
              </Link>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  </AppBar>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  color: 'secondary',
};

export const GradientAppbar = Template.bind({});
GradientAppbar.args = {
  color: 'secondary',
  gradient: 'orange',
};
