const MuiButton = {
  styleOverrides: {
    root: {
      minWidth: '100px',
      lineHeight: 1.2,
      padding: '8px 24px',
      boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
    },
    endIcon: {
      position: 'absolute',
      margin: 0,
      right: 17,
      svg: {
        width: 14,
        height: 14,
      },
    },
  },
  variants: [
    {
      props: {
        size: 'large',
      },
      style: {
        fontSize: 25,
        minHeight: 62,
        borderRadius: 31,
        '& .MuiButton-endIcon': {},
      },
    },
    {
      props: {
        size: 'medium',
      },
      style: {
        fontSize: 20,
        minHeight: 50,
        borderRadius: 25,
        '& .MuiButton-endIcon': {},
      },
    },
    {
      props: {
        size: 'small',
      },
      style: {
        fontSize: 16,
        minHeight: 40,
        borderRadius: 25,
        '& .MuiButton-endIcon': {},
      },
    },
    {
      props: {
        size: 'xs',
      },
      style: {
        fontSize: 14,
        minHeight: 27,
        borderRadius: 25,
        padding: '0px 12px',
        '& .MuiButton-endIcon': {},
      },
    },
  ],
};

export default MuiButton;
