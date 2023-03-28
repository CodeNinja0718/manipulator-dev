import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CommonDatePicker from 'components/CommonDatePicker';

import styles from './styles';

interface DatePickerProps {
  currentDate: Date | string | null;
  onSetCurrentDate: (value: Date | string | null) => void;
  placeholder?: string;
}

const DatePicker = ({
  currentDate,
  onSetCurrentDate,
  placeholder,
}: DatePickerProps) => {
  return (
    <Box sx={{ maxWidth: { xs: '100%', mobile: 338 } }}>
      <Typography color="orangeBold" sx={{ fontSize: '1.13rem' }}>
        日付・時間
      </Typography>
      <CommonDatePicker
        value={currentDate}
        placeholder={placeholder}
        onChange={(value: Date | string | null) => {
          onSetCurrentDate(value);
        }}
        componentStyle={styles.calendar}
        disablePast
      />
    </Box>
  );
};

export default DatePicker;
