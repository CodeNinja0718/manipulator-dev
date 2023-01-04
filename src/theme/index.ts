/* eslint-disable unused-imports/no-unused-vars */
import type { PaletteOptions as MuiPaletteOptions } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { Noto_Sans_JP } from '@next/font/google';

import components from './components';

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
  }

  interface PaletteOptions {
    white?: string;
    button?: string;
    backgroundColor: string;
    tertiary: string;
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

const palette: MuiPaletteOptions = {
  primary: {
    main: '#249287',
    contrastText: '#fff',
  },
  secondary: {
    main: '#659d3b',
  },
  tertiary: '#ea6500',
  error: {
    main: '#d42828',
  },
  success: {
    main: '#51b873',
  },
  warning: {
    main: '#ea6500',
  },
  text: {
    primary: '#333333',
  },
  heading: '#5a524f',
  white: '#fff',
  backgroundColor: '#f4f2f1',
  action: {
    hoverOpacity: 0.4,
    disabledBackground: '#cccccc',
  },
};

// Create a theme instance.
const theme = createTheme({
  components,
  palette,
  typography: {
    fontFamily: `HiraginoKakuGothicPro,${noto.style.fontFamily}`,
    allVariants: {
      whiteSpace: 'pre-line',
      wordBreak: 'break-word',
      lineHeight: 'normal',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      tablet: 768,
      md: 900,
      lg: 1200,
      xl: 1440,
    },
  },
  spacing: (factor: number) => `${factor}px`,
  shape: {
    borderRadius: 0,
  },
});

export default theme;
