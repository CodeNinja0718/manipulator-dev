import CalendarIcon from '@icons/icon_datepicker.svg';
import ClearIcon from '@mui/icons-material/Clear';
import { Box, IconButton } from '@mui/material';
import type { SxProps } from '@mui/material/styles';
import SvgIcon from '@mui/material/SvgIcon';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';
import omit from 'lodash/omit';
import { DateFormat } from 'utils/const';

import styles from './styles';

interface CommonDatePickerProps {
  value: Date | string | null;
  inputFormat?: string;
  placeholder?: string;
  onChange: (value: Date | string | null) => void;
  componentStyle?: SxProps | object;
  disablePast?: boolean;
}

const CommonDatePicker = ({
  value,
  inputFormat = DateFormat.YEAR_MONTH_DATE_DASH,
  placeholder,
  onChange,
  componentStyle,
  disablePast,
  ...props
}: CommonDatePickerProps) => {
  return (
    <DesktopDatePicker
      {...props}
      value={value}
      disablePast={disablePast}
      PopperProps={{
        sx: styles.popperSx,
      }}
      onChange={(dateValue) => {
        let currentValue: Date | string = new Date();
        if (dayjs.isDayjs(dateValue) && dateValue.isValid()) {
          currentValue = dateValue.format(inputFormat);
        } else currentValue = dateValue || '';
        onChange(currentValue);
      }}
      components={{
        OpenPickerIcon: () => (
          <SvgIcon
            component={CalendarIcon}
            className="tabletStyle"
            viewBox="0 0 20 18"
            sx={styles.icon}
          />
        ),
      }}
      renderInput={(params) => {
        return (
          <Box position={'relative'}>
            <TextField
              margin="none"
              {...omit(params, ['onKeyUp', 'onKeyDown'])}
              inputProps={{
                ...params.inputProps,
                placeholder: placeholder || params.inputProps?.placeholder,
                readOnly: true,
              }}
              sx={componentStyle}
            />
            {value && (
              <IconButton
                style={{
                  position: 'absolute',
                  top: '17px',
                  margin: 'auto',
                  right: '40px',
                }}
                onClick={() => onChange(null)}
              >
                <ClearIcon />
              </IconButton>
            )}
          </Box>
        );
      }}
    />
  );
};
export default CommonDatePicker;
