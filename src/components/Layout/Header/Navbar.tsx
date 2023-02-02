import HomeSvg from '@icons/icon_home.svg';
import LoginSvg from '@icons/icon_logout.svg';
import RegisterSvg from '@icons/icon_profile.svg';
import { Stack, SvgIcon } from '@mui/material';
import Link from 'components/Link';
import { useUser } from 'hooks';
import React from 'react';

import styles from './styles';

interface NavbarProps {
  isCardLayout?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isCardLayout }) => {
  const { data } = useUser();

  return (
    <Stack direction="row" sx={styles.navBarMenus}>
      <Link href="/" sx={styles.navBarMenuItem} data-card={isCardLayout}>
        <SvgIcon component={HomeSvg} inheritViewBox />
        ホーム
      </Link>
      {data ? (
        <>
          <Link
            href="/profile"
            sx={styles.navBarMenuItem}
            data-card={isCardLayout}
          >
            <SvgIcon component={RegisterSvg} inheritViewBox />
            マイページ
          </Link>
          <Link
            href="/logout"
            sx={styles.navBarMenuItem}
            data-card={isCardLayout}
          >
            <SvgIcon component={LoginSvg} inheritViewBox />
            ログアウト
          </Link>
        </>
      ) : (
        <>
          <Link
            href="/register"
            sx={styles.navBarMenuItem}
            data-card={isCardLayout}
          >
            <SvgIcon component={RegisterSvg} inheritViewBox />
            {isCardLayout ? (
              <>
                初めてのご利用の方へ
                <br />
                新規会員登録
              </>
            ) : (
              '新規会員登録'
            )}
          </Link>
          <Link
            href="/login"
            sx={styles.navBarMenuItem}
            data-card={isCardLayout}
          >
            <SvgIcon component={LoginSvg} inheritViewBox />
            ログイン
          </Link>
        </>
      )}
    </Stack>
  );
};

export default Navbar;
