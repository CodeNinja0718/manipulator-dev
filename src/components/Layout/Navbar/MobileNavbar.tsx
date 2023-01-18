import CloseIcon from '@icons/close.svg';
import { Box, Link } from '@mui/material';
import { gradientComponent } from 'hoc/GrandientComponent';
import dynamic from 'next/dynamic';

import type { SideMenuItem } from '../SideMenuLayout';
import SideMenu from '../SideMenuLayout/SideMenu';
import Logo from './Logo';
import styles from './styles';

const Social = dynamic(() => import('../Footer/SocialItem'));
const MobileNavbar = ({
  onCloseSidebar,
  menus,
}: {
  onCloseSidebar: () => void;
  menus: SideMenuItem[];
}) => {
  return (
    <Box sx={{ width: { xs: '100vw', fcol: '325px' } }} role="presentation">
      {gradientComponent(
        <Box sx={styles.sideMenuMobile}>
          <Box
            sx={{
              p: '10px 15px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
            height="65px"
          >
            <Box sx={styles.logoContainer} component={Link} href="/">
              <Logo />
            </Box>
            <Box sx={styles.closeButton} onClick={onCloseSidebar}>
              <CloseIcon width="30px" height="30px" color="white" />
            </Box>
          </Box>
          <Box sx={styles.menuMobileBox}>
            <SideMenu menus={menus} isMobile={true} />
          </Box>
          <Social style={styles.socicalMobile} />
        </Box>,
        'linear-gradient(to bottom, #ff9a4d, #eb6600)',
      )}
    </Box>
  );
};

export default MobileNavbar;
