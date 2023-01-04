const MuiTypography = {
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
      title: 'h1',
    },
  },
  variants: [
    {
      props: {
        variant: 'title',
      },
      style: {
        position: 'relative',
        color: '#eb6600',
        fontSize: 24,
        '&::after': {
          content: '""',
          background: 'linear-gradient(to right, #ff9a4d, #eb6600)',
          position: 'absolute',
          bottom: -9,
          left: 0,
          height: 6,
          width: '100%',
          borderRadius: 3,
          transform: 'translateY(50%)',
        },
      },
    },
  ],
};

export default MuiTypography;
