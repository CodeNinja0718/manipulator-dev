import ArrowIcon from '@icons/arrow.svg';
import { Button, SvgIcon } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import dynamic from 'next/dynamic';

import styles from './styles';

const CommonCollapse = dynamic(() => import('components/CommonCollapse'));

const FAQ_LIST = [
  {
    question:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    answer:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
  {
    question:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    answer:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
  {
    question:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    answer:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
  {
    question:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    answer:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
];
const FAQTopPage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={styles.wrapper}
    >
      <Box>
        <Typography sx={styles.customerReivewTitle} variant="title">
          よくあるご質問
        </Typography>
      </Box>
      <Box
        sx={{
          mt: { xs: 40, tablet: 84 },
        }}
      >
        {FAQ_LIST.map((item, index) => (
          <CommonCollapse
            key={`faq-${index}`}
            title={item.question}
            content={item.answer}
          />
        ))}
      </Box>
      {/* Mobile Button */}
      <Button
        variant="contained"
        sx={{ ...styles.button, ...{ marginTop: 40 } }}
        endIcon={
          <SvgIcon component={ArrowIcon} viewBox="0 0 14 30" color="inherit" />
        }
      >
        まずは整体師を検索！
      </Button>
    </Box>
  );
};
export default FAQTopPage;
