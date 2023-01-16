import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ContentOfBanner = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: { xs: 81, normalTablet: 185 },
        left: { xs: 159, normalTablet: 576 },
      }}
    >
      <Box
        sx={{
          padding: '0 21px 0 12px',
          background: 'white',
          borderRadius: '5px',
          mb: 8,
        }}
      >
        <Typography
          fontSize={26}
          fontWeight={600}
          lineHeight={1}
          sx={{
            display: 'flex',
            alignItems: 'center',
            minHeight: 66,
          }}
        >
          あなたに
          <Typography
            color="orangeText"
            variant="body2"
            fontSize={42}
            lineHeight={1}
            fontWeight={600}
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
          fontSize={28}
          fontWeight={600}
          lineHeight={1}
          sx={{
            display: 'flex',
            alignItems: 'center',
            minHeight: 66,
          }}
        >
          整体師が見つかる！
        </Typography>
      </Box>
    </Box>
  );
};

export default ContentOfBanner;
