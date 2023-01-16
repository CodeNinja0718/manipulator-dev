import Box from '@mui/material/Box';
import Image from 'next/image';

const ProblemsTopPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        background: 'white',
        pt: 60,
        pb: 68,
      }}
    >
      <Box position="relative" width={446} height={337}>
        <Image
          src="/images/problem.webp"
          alt="problem-image"
          fill
          priority
          sizes="(max-width: 3840px) 100vw,
                  (max-width: 2048px) 75vw,
                  (max-width: 1440px) 50vw"
        />
      </Box>
    </Box>
  );
};
export default ProblemsTopPage;
