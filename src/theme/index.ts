import { createTheme } from '@mui/material/styles';
import { Noto_Sans_JP } from '@next/font/google';

import defaultTheme from './defaultTheme';

export const noto = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin', 'japanese'],
  display: 'swap',
  fallback: ['sans-serif'],
});

const theme = createTheme({
  ...defaultTheme,
  typography: {
    ...defaultTheme.typography,
    fontFamily: `HiraginoKakuGothicPro,${noto.style.fontFamily}`,
  },
});

export default theme;
