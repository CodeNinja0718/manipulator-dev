import type { ThemeOptions } from '@mui/system';

const components: ThemeOptions['components'] = {
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: '5px',
        backgroundColor: 'transparent',
        '&:not(.Mui-error):not(.Mui-disabled)': {
          '&:hover': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#249287',
            },
          },
        },
        '& .MuiSelect-icon': {
          width: '24px',
          height: '24px',
          right: '12px',
          top: 'calc(50% - 12px)',
        },
      },
      input: {
        fontSize: 18,
      },
      notchedOutline: {
        padding: 0,
        borderWidth: '1px',
        border: '1px solid #000',
      },
    },
    variants: [
      {
        props: {
          size: 'medium',
        },
        style: {
          input: {
            padding: '16px 24px',
            borderRadius: '8px',
            fontSize: 16,
            '&.Mui-disabled': {
              backgroundColor: '#cccccc',
            },
          },
        },
      },
      {
        props: {
          size: 'large',
        },
        style: {
          input: {
            height: 24,
          },
        },
      },
    ],
  },
  MuiButton: {
    styleOverrides: {
      root: {
        minWidth: '100px',
        borderRadius: '35px',
      },
      sizeMedium: {
        lineHeight: '21px',
      },
      sizeLarge: {
        lineHeight: '24px',
        fontSize: 18,
      },
      containedPrimary: {
        boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.25)',
        '&.Mui-disabled': {
          color: '#fff',
        },
      },
      outlinedPrimary: {
        borderColor: '#249287',
        boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.25)',
      },
    },
    variants: [
      {
        props: {
          size: 'large',
        },
        style: {
          padding: '22px 24px 23px',
        },
      },
      {
        props: {
          size: 'medium',
        },
        style: {
          padding: '19.5px 20px',
        },
      },
      {
        props: {
          size: 'small',
        },
        style: {
          padding: '15px 18px',
        },
      },
    ],
  },
  MuiTypography: {
    defaultProps: {
      variantMapping: {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        body1: 'p',
        body2: 'span',
      },
    },
  },
};

export default components;
