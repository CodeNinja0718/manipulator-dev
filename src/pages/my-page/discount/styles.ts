import type { SxProps } from '@mui/material';

const styles: Record<string, SxProps> = {
  discountListPageWrapper: {
    padding: { xs: '45px 20px 70px', tablet: '60px 20px 54px' },

    '& .wrapperTab': {
      width: '100%',
    },

    '& .contentTab': {
      maxHeight: 'initial',
      px: {
        xs: 2,
        md: 0,
      },
    },
  },
};

export default styles;
