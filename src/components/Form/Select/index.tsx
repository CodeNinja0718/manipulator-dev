import CloseIcon from '@icons/close.svg';
import type { FormControlProps } from '@mui/material';
import { Box, FormControl, IconButton } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import type { SelectProps } from '@mui/material/Select';
import MuiSelect from '@mui/material/Select';
import { isEmpty, isNil } from 'lodash';
import type { ReactNode } from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';
import { useController } from 'react-hook-form';

import HelperText from '../HelperText';
import Label from '../Label';
import styles from '../styles';

interface SelectFieldProps<TFormValues extends FieldValues> {
  label?: string;
  required?: boolean;
  name: Path<TFormValues>;
  control: Control<TFormValues>;
  maxLength?: number;
  data: { id: string | number; name: string | number }[];
  labelCol?: number;
  columns?: number;
  viewMode?: boolean;
  extraLabel?: string | ReactNode;
  fixedHelperText?: boolean;
  showError?: boolean;
  formControlProps?: FormControlProps;
}

const Select = <TFormValues extends FieldValues>({
  label,
  data = [],
  required,
  maxLength,
  control,
  name,
  placeholder,
  multiple,
  showError = true,
  fixedHelperText = true,
  formControlProps,
  ...props
}: SelectFieldProps<TFormValues> & SelectProps) => {
  const {
    field: { value = multiple ? [] : '', ...otherField },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <FormControl
      fullWidth
      variant="standard"
      sx={styles.formControlWrapper}
      error={!!error}
      {...formControlProps}
    >
      {label && <Label label={label} required={required} htmlFor={name} />}
      <MuiSelect
        className="tabletStyle"
        sx={styles.input}
        id={name}
        {...props}
        {...otherField}
        value={!isNil(value) ? value : ''}
        error={!!error}
        variant="outlined"
        displayEmpty
        inputProps={{ maxLength }}
        renderValue={
          value !== ''
            ? undefined
            : () => <Box sx={styles.placeholder}>{placeholder}</Box>
        }
        MenuProps={{
          PaperProps: {
            sx: {
              px: 1,
            },
          },
        }}
        IconComponent={(iconProps) => {
          if (isEmpty(value?.toString())) {
            return (
              <img
                {...iconProps}
                alt="arrow-down"
                src="/icons/arrow-down.svg"
              />
            );
          }
          return (
            <IconButton
              sx={styles.clearButton}
              onClick={() => otherField.onChange('')}
            >
              <CloseIcon />
            </IconButton>
          );
        }}
      >
        <MenuItem key="none" value="" disabled={required}>
          <Box sx={styles.placeholder}>{placeholder}</Box>
        </MenuItem>
        {data.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </MuiSelect>
      {showError && (
        <HelperText error={error?.message} fixed={fixedHelperText} />
      )}
    </FormControl>
  );
};

export default Select;
