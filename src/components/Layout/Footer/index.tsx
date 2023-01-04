import FacebookIcon from '@icons/facebook_icon.svg';
import InstagramIcon from '@icons/instagram_icon.svg';
import TwitterIcon from '@icons/twitter_icon.svg';
import { Box, Container, Link, Stack, Typography } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';
import theme from 'theme';
import { COMMON_FOOTER, FOOTER_ITEMS } from 'utils/const';

import styles from './styles';

const navbar = FOOTER_ITEMS;
const socialItems = [
  {
    href: 'instagram',
    icon: InstagramIcon,
  },
  {
    href: 'twitter',
    icon: TwitterIcon,
  },
  {
    href: 'facebook',
    icon: FacebookIcon,
  },
];

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

        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          gap={20}
          mt={39}
        >
          {socialItems.map((item) => (
            <Link key={item.href} href={`/${item.href}`} sx={{ height: 16.6 }}>
              <SvgIcon component={item.icon} sx={{ color: 'white' }} />
            </Link>
          ))}
        </Stack>

        <Typography textAlign="center" mt={56}>
          © {COMMON_FOOTER.MANIPULATIVE_NAVIGATION} {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
