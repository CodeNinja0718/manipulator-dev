/* eslint-disable unused-imports/no-unused-vars */
import type { PaletteOptions as MuiPaletteOptions } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import components from './components';

declare module '@mui/material/styles' {
  interface Palette {
    white: string;
    button: string;
    backgroundColor: string;
    heading: string;
    grown: string;
    grownText: string;
    orange: object;
    orangeText: string;
    orangeBold: string;
    orangeGradient: string;
    greenGradient: string;
    gray: string;
    pink: string;
    cream: string;
    placeholder: string;
    grayText: string;
  }

  interface PaletteOptions {
    white?: string;
    grown?: string;
    grownText?: string;
    button?: string;
    backgroundColor: string;
    heading: string;
    orange: object;
    orangeText: string;
    orangeBold: string;
    orangeGradient?: string;
    greenGradient?: string;
    gray?: string;
    pink?: string;
    cream?: string;
    placeholder?: string;
    grayText?: string;
  }

  interface TypographyVariants {
    title: React.CSSProperties;
    titleWhite: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    title?: React.CSSProperties;
    titleWhite?: React.CSSProperties;
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
    normalTablet: true;
    mobile: true;
    normalMobile: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true;
    titleWhite: true;
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

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides {
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
  cream: '#fcf7f4',
  orangeText: '#ea6500',
  orangeBold: '#eb6600',
  gray: '#707070',
  grayText: '#6b6b6b',
  pink: '#efe6df',
  text: {
    primary: '#333333',
  },
  heading: '#5a524f',
  grown: '#413732',
  grownText: '#63564d',
  placeholder: '#999999',
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
      normalMobile: 375,
      mobile: 426,
      sm: 600,
      tablet: 768,
      md: 900,
      normalTablet: 1024,
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
