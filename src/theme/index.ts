/* eslint-disable unused-imports/no-unused-vars */
import { createTheme } from '@mui/material/styles';
import { Noto_Sans_JP } from '@next/font/google';

import defaultTheme from './defaultTheme';

export const noto = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin', 'japanese'],
  display: 'swap',
  fallback: ['sans-serif'],
});

declare module '@mui/material/styles' {
  interface Palette {
    white: string;
    button: string;
    backgroundColor: string;
    tertiary: string;
    heading: string;
    grown: string;
  }

  interface PaletteOptions {
    white?: string;
    grown?: string;
    button?: string;
    backgroundColor: string;
    heading: string;
  }
  interface TypographyVariants {
    title: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    title?: React.CSSProperties;
  }
}

declare module '@mui/material/InputBase' {
  interface InputBasePropsSizeOverrides {
    large: true;
  }
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    tablet: true;
    mobile: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsSizeOverrides {
    xs: true;
  }
}

// Create a theme instance.
const theme = createTheme({
  ...defaultTheme,
  typography: {
    ...defaultTheme.typography,
    fontFamily: `HiraginoKakuGothicPro,${noto.style.fontFamily}`,
  },
});

export default theme;
