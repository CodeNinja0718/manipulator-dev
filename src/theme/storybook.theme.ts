// src/themes/dark.theme.js

import type { PaletteColorOptions } from '@mui/material';
import { createTheme } from '@mui/material';

import components from './components';

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
    tertiary: PaletteColorOptions;
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

export const theme = createTheme({
  components,
  palette: {
    primary: {
      main: '#249287',
      contrastText: '#fff',
    },
    secondary: {
      main: '#659d3b',
    },
    tertiary: {
      main: '#ea6500',
      dark: '#eb6600',
    },
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
    grown: '#413732',
    white: '#fff',
    backgroundColor: '#f4f2f1',
    action: {
      hoverOpacity: 0.4,
      disabledBackground: '#cccccc',
    },
  },
  typography: {
    allVariants: {
      whiteSpace: 'pre-line',
      wordBreak: 'break-word',
      lineHeight: 'normal',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      mobile: 426,
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
