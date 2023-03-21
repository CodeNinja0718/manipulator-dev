import ArrowRight from '@icons/arrow-right.svg';
import type { StackProps } from '@mui/material';
import { Stack } from '@mui/material';
import Link from 'components/Link';
import useBreakpoint from 'hooks/useBreakpoint';
import { CUSTOMER_NAVIGATION } from 'utils/const';

import styles from './styles';

interface NavigationMenuProps extends StackProps {}

// Navigation menu box only shown in mobile under /my-page route
const NavigationMenu: React.FC<NavigationMenuProps> = ({ ...props }) => {
  const isMobile = useBreakpoint({});
  if (!isMobile) return <></>;

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      sx={styles.navigationMenuWrapper}
      {...props}
    >
      <Link href="/" sx={styles.menuItem}>
        マイページTOP
        <ArrowRight />
      </Link>
      {CUSTOMER_NAVIGATION.map((nav) => (
        <Link key={nav.href} href={nav.href} sx={styles.menuItem}>
          {nav.label}
          <ArrowRight />
        </Link>
      ))}
    </Stack>
  );
};

export default NavigationMenu;
