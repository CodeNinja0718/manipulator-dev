import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import type { Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';

interface CommonCollapseProps {
  title?: string;
  content?: string;
  label?: string;
}

const CommonCollapse = ({ title, content, label }: CommonCollapseProps) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box
      sx={{
        '& .common-collapse': {
          background: (theme: Theme) => theme.palette.cream,
        },
        '&:nth-child(odd)': {
          '& .common-collapse': {
            background: 'white',
          },
        },
      }}
    >
      <FormControlLabel
        control={
          <Box
            onClick={handleChange}
            display="flex"
            alignItems="center"
            p="20px 25px 20px 20px"
            minHeight={70}
            className="common-collapse"
          >
            <Box>{title}</Box>
            <Typography pl={30} fontSize={32} lineHeight={1} color="primary">
              +
            </Typography>
          </Box>
        }
        label={label}
        sx={{
          m: 'auto',
        }}
      />
      {checked && (
        <Box sx={{ display: 'flex' }}>
          <Box mt={13} mb={15} pr={25} pl={20}>
            {content}
          </Box>
        </Box>
      )}
    </Box>
  );
};
export default CommonCollapse;
