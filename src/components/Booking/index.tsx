import Box from '@mui/material/Box';
import ManipulatorSummaryInfo from 'components/ManipulatorSummaryInfo';

import styles from './styles';

const Booking = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.informationItem}>
        <ManipulatorSummaryInfo
          name="整体師太郎"
          salonName="快適整体院"
          access={['東急東横線 渋谷駅 徒歩10分']}
          reviewRating={{ total: 0, averageRating: 0 }}
          photos={[
            {
              objectKey: 'customers/public-read-6L3MNhxc_fFfXniMkbGm_-2.jpg',
              type: 'avatar',
              url: 'https://development-manipulator-api-data.s3.amazonaws.com/customers/public-read-6L3MNhxc_fFfXniMkbGm_-2.jpg',
            },
          ]}
        />
      </Box>
      <Box sx={styles.container}>This is choose menu</Box>
    </Box>
  );
};
export default Booking;
