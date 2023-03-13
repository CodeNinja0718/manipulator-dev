import type { FormControlProps, OutlinedInputProps } from '@mui/material';
import { FormControl, OutlinedInput } from '@mui/material';
import React from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';
import { useController } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';

import HelperText from '../HelperText';
import Label from '../Label';
import styles from '../styles';

interface MaskFieldProps<TFormValues extends FieldValues> {
  label?: string;
  name: Path<TFormValues>;
  control: Control<TFormValues>;
  required?: boolean;
  format: string;
  formControlProps?: FormControlProps;
  inputProps?: Omit<OutlinedInputProps, 'defaultValue' | 'type'>;
  fixedHelperText?: boolean;
  showError?: boolean;
}

const MaskedField = <TFormValues extends FieldValues>({
  name,
  control,
  label,
  format,
  formControlProps,
  inputProps,
  required,
  showError = true,
  fixedHelperText = true,
}: MaskFieldProps<TFormValues>) => {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController<TFormValues>({
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
      {label && <Label label={label} htmlFor={name} required={required} />}

      <PatternFormat
        id={name}
        customInput={OutlinedInput}
        format={format}
        value={value as any}
        onChange={onChange}
        onBlur={onBlur}
        {...inputProps}
      />
      {showError && (
        <HelperText error={error?.message} fixed={fixedHelperText} />
      )}
    </FormControl>
  );
};

export default MaskedField;
