import Box from '@mui/material/Box';

interface TabItemProps {
  children: React.ReactNode;
}

const TabItem = ({ children }: TabItemProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width={{ xs: '100%', tablet: '50%' }}
      flexWrap="wrap"
      rowGap={{ xs: 35, tablet: 30 }}
      sx={{
        mb: { xs: 35, tablet: 30 },
      }}
    >
      {children}
    </Box>
  );
};

export default TabItem;
