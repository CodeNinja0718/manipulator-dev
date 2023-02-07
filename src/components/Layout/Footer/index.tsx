import { Box, Container, Link, Stack, Typography } from '@mui/material';
import theme from 'theme';
import { COMMON_FOOTER, FOOTER_ITEMS } from 'utils/const';

import SocialItem from './SocialItem';
import styles from './styles';

const navbar = FOOTER_ITEMS;

const Footer = () => {
  return (
    <Box sx={styles.footerBox}>
      <Container maxWidth="xl">
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          gap={30}
          pt={33}
          sx={{
            [theme.breakpoints.down('mobile')]: {
              justifyContent: 'flex-start',
              rowGap: 16,
            },
          }}
        >
          {navbar.map((section, index) => (
            <Box key={index}>
              <Link
                color="primary.contrastText"
                key={section.href}
                href={`/${section.href}`}
                underline="hover"
              >
                <Typography>{section.label}</Typography>
              </Link>
            </Box>
          ))}
        </Stack>

        <SocialItem style={styles.socical} />

        <Typography textAlign="center" mt={56}>
          © {COMMON_FOOTER.MANIPULATIVE_NAVIGATION} {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
