import CalendarIcon from '@icons/icon_datepicker.svg';
import { FormControl, SvgIcon, TextField } from '@mui/material';
import type { DesktopDatePickerProps } from '@mui/x-date-pickers/DesktopDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { omit } from 'lodash';
import type { Control, FieldValues, Path } from 'react-hook-form';
import { useController } from 'react-hook-form';
import { DateFormat } from 'utils/const';

import HelperText from '../HelperText';
import Label from '../Label';
import styles from '../styles';

interface DatePickerProps<TFormValues extends FieldValues>
  extends Omit<
    DesktopDatePickerProps<Date | Dayjs, Date | Dayjs>,
    'onChange' | 'renderInput' | 'value'
  > {
  name: Path<TFormValues>;
  control: Control<TFormValues>;
  required?: boolean;
  labelCol?: number;
  columns?: number;
  placeholder?: string;
  label?: string;
}

const DatePicker = <TFormValues extends FieldValues>({
  label,
  required,
  control,
  name,
  placeholder,
  inputFormat = DateFormat.YEAR_MONTH_DATE,
  ...props
}: DatePickerProps<TFormValues>) => {
  const {
    field: { value = null, onChange, ...otherField },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <FormControl fullWidth>
      {label && <Label label={label} required={required} htmlFor={name} />}

      <DesktopDatePicker
        {...props}
        {...otherField}
        onChange={(dateValue) => {
          if (dayjs.isDayjs(dateValue) && dateValue.isValid()) {
            onChange(dateValue.format(inputFormat));
          } else onChange(dateValue);
          otherField.onBlur();
        }}
        value={value}
        disableHighlightToday
        inputFormat={inputFormat}
        components={{
          OpenPickerIcon: () => (
            <SvgIcon
              color="primary"
              component={CalendarIcon}
              className="tabletStyle"
              inheritViewBox
              sx={{
                width: 18,
                height: 18,
              }}
            />
          ),
        }}
        renderInput={(params) => {
          return (
            <TextField
              sx={[styles.input, styles.datepicker] as never}
              {...omit(params, ['onKeyUp', 'onKeyDown'])}
              onBlur={otherField.onBlur}
              error={!!error}
              margin="none"
              inputProps={{
                ...params.inputProps,
                placeholder: placeholder || params.inputProps?.placeholder,
              }}
            />
          );
        }}
      />

      <HelperText error={error?.message} />
    </FormControl>
  );
};

export default DatePicker;
