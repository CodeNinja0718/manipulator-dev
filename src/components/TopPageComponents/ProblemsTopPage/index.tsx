import Box from '@mui/material/Box';
import Image from 'next/image';

const ProblemsTopPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        background: 'white',
        pt: { xs: 50, tablet: 60 },
        pb: { xs: 145, tablet: 68 },
        paddingX: '15px',
      }}
    >
      <Box
        position="relative"
        sx={{
          width: { xs: '302px', tablet: '446px' },
          height: { xs: '228px', tablet: '337px' },
        }}
      >
        <Image
          src="/images/problem.webp"
          alt="problem-image"
          fill
          sizes="(max-width: 3840px) 100vw,
                  (max-width: 2048px) 75vw,
                  (max-width: 1440px) 50vw,
                  (max-width: 768px) 320px
                "
        />
      </Box>
    </Box>
  );
};
export default ProblemsTopPage;
