import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import styles from '../styles';

const ContentOfBanner = () => {
  return (
    <Box sx={styles.contentOfBanner}>
      <Box
        sx={{
          padding: '0 21px 0 12px',
          background: 'white',
          borderRadius: '5px',
          mb: 8,
        }}
      >
        <Typography
          fontWeight={600}
          lineHeight={1}
          sx={{
            display: 'flex',
            alignItems: 'center',
            minHeight: { xs: 40, md: 66 },
            fontSize: { xs: 18, md: 26 },
          }}
        >
          あなたに
          <Typography
            color="orangeText"
            variant="body2"
            lineHeight={1}
            fontWeight={600}
            sx={{
              fontSize: { xs: 18, md: 42 },
            }}
          >
            ピッタリ
          </Typography>
          の
        </Typography>
      </Box>

      <Box
        sx={{
          padding: '0 21px 0 12px',
          background: 'white',
          borderRadius: '5px',
        }}
      >
        <Typography
          fontWeight={600}
          lineHeight={1}
          sx={{
            display: 'flex',
            alignItems: 'center',
            minHeight: { xs: 40, md: 66 },
            fontSize: { xs: 18, md: 28 },
          }}
        >
          整体師が見つかる！
        </Typography>
      </Box>
    </Box>
  );
};

export default ContentOfBanner;
