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
          お客様の声
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 84,
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
    </Box>
  );
};
export default FAQTopPage;
