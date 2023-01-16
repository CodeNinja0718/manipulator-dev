import type { SxProps, Theme } from '@mui/material/styles';

const styles = {
  featureItemStyle: {
    width: 300,
    height: 202,
    pb: 19,
    borderRadius: '30px 0 10px 0',
  },
  featureListBox: {
    position: 'relative',
    display: 'flex',
    mt: 73,
    flexWrap: 'wrap',
    gap: 50,
    justifyContent: 'center',
  },
  featureListTitle: {
    fontSize: 37.55,
    color: 'white',
    fontWeight: 500,
  },
  featureContainer: {
    position: 'relative',
    display: 'flex',
    pt: 258,
    pb: 64,
    width: '100%',
    height: { xs: '100%', normalTablet: 656 },
    overflow: 'hidden',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  wrapper: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    background: 'white',
  },
} as Record<string, SxProps<Theme>>;

export default styles;
