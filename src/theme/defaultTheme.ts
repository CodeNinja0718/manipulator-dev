/* eslint-disable unused-imports/no-unused-vars */
import type {
		PaletteColorOptions,
		PaletteOptions as MuiPaletteOptions,
	} from '@mui/material';
import { createTheme } from '@mui/material/styles';

import components from './components';

declare module '@mui/material/styles' {
  interface Palette {
    white: string;
    button: string;
    backgroundColor: string;
    tertiary: string;
    heading: string;
    grown: string;
    orange: object;
    orangeGradient: string;
    greenGradient: string;
  }

  interface PaletteOptions {
    white?: string;
    grown?: string;
    button?: string;
    backgroundColor: string;
    tertiary: PaletteColorOptions;
    heading: string;
    orange: object;
    orangeGradient?: string;
    greenGradient?: string;
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
  interface ButtonPropsColorOverrides {
    orange: true;
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
  orange: {
    main: '#ea6500',
    contrastText: '#fff',
  },
  text: {
    primary: '#333333',
    secondary: '#666666',
  },
  heading: '#5a524f',
  grown: '#413732',
  white: '#fff',
  backgroundColor: '#f4f2f1',
  orangeGradient: 'linear-gradient(295deg, #ff872b, #ec6702 53%, #eb6600)',
  greenGradient: 'linear-gradient(to bottom, #a3cc30, #5e983c)',
  action: {
    hoverOpacity: 0.4,
    disabledBackground: '#cccccc',
  },
};

// Create a theme instance.
const defaultTheme = createTheme({
  components,
  palette,
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

export default defaultTheme;
