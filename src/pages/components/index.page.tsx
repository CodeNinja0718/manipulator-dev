import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Layout from 'components/Layout';
import type { ReactElement } from 'react';

const ComponentPage = () => {
  return (
    <Box p={2}>
      <Box>Components</Box>
      <Box>
        <Typography variant="h3" fontWeight={700}>
          Button
        </Typography>
        <Button size="small" variant="text">
          Text
        </Button>
        <Button size="small" variant="contained">
          Contained
        </Button>
        <Button size="small" variant="outlined">
          Outlined
        </Button>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <br />
        <Button size="small" variant="text" color="secondary">
          secondary
        </Button>
        <Button size="small" variant="contained" color="secondary">
          secondary
        </Button>
        <Button size="small" variant="outlined" color="secondary">
          secondary
        </Button>
        <Button size="small" variant="text" color="error">
          error
        </Button>
        <Button size="small" variant="contained" color="error">
          error
        </Button>
        <Button size="small" variant="outlined" color="error">
          error
        </Button>
        <Button size="small" variant="text" color="orange">
          orange
        </Button>
        <Button size="small" variant="contained" color="orange">
          orange
        </Button>
        <Button size="small" variant="outlined" color="orange">
          orange
        </Button>
        <Button size="small" variant="text" disabled>
          disabled
        </Button>
        <Button size="small" variant="contained" disabled>
          disabled
        </Button>
        <Button size="small" variant="outlined" disabled>
          disabled
        </Button>
        <br />
        <Button
          size="xs"
          variant="contained"
          color="orange"
          endIcon={<ArrowForwardIosIcon fontSize="small" />}
        >
          整体師編
        </Button>
        <Button
          size="small"
          variant="contained"
          color="orange"
          endIcon={<ArrowForwardIosIcon fontSize="small" />}
          sx={{
            width: 200,
          }}
        >
          整体師編
        </Button>
        <Button
          size="medium"
          variant="contained"
          color="orange"
          endIcon={<ArrowForwardIosIcon fontSize="small" />}
        >
          整体師編
        </Button>
        <Button
          size="large"
          variant="contained"
          color="orange"
          endIcon={<ArrowForwardIosIcon fontSize="small" />}
        >
          整体師編
        </Button>
      </Box>

      <Box>
        <Typography variant="h3" fontWeight={700}>
          Typography
        </Typography>
        <Typography variant="title" style={{ display: 'inline' }}>
          Responsive title
        </Typography>
        <Typography variant="h1">Responsive h1</Typography>
        <Typography variant="h2">Responsive h2</Typography>
        <Typography variant="h3">Responsive h3</Typography>
        <Typography variant="h4">Responsive h4</Typography>
        <Typography variant="h5">Responsive h5</Typography>
        <Typography variant="subtitle1" gutterBottom>
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="body2" gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="button" display="block" gutterBottom>
          button text
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          caption text
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          overline text
        </Typography>
        <Typography variant="h3" color="primary" fontWeight={700}>
          Text Color primary
        </Typography>
        <Typography variant="h3" color="secondary" fontWeight={700}>
          Text Color secondary
        </Typography>
        <Typography variant="h3" color="orangeText" fontWeight={700}>
          Text Color orange
        </Typography>
        <Typography variant="h3" color="error" fontWeight={700}>
          Text Color error
        </Typography>
        <Typography variant="h3" fontWeight={700}>
          Text Color text
        </Typography>
      </Box>
    </Box>
  );
};

ComponentPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout isCard>{page}</Layout>;
};

export default ComponentPage;
