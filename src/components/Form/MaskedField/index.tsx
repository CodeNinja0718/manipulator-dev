import type { FormControlProps, OutlinedInputProps } from '@mui/material';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import React from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';
import { useController } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';

import styles from '../styles';

interface MaskFieldProps<TFormValues extends FieldValues> {
  label?: string;
  name: Path<TFormValues>;
  control: Control<TFormValues>;
  required?: boolean;
  format: string;
  formControlProps?: FormControlProps;
  inputProps?: Omit<OutlinedInputProps, 'defaultValue' | 'type'>;
}

const MaskedField = <TFormValues extends FieldValues>({
  name,
  control,
  label,
  format,
  formControlProps,
  inputProps,
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
      {label && (
        <InputLabel
          className="form-label"
          htmlFor={name}
          variant="standard"
          shrink
        >
          {label}
        </InputLabel>
      )}
      <PatternFormat
        id={name}
        customInput={OutlinedInput}
        format={format}
        value={value as any}
        onChange={onChange}
        onBlur={onBlur}
        {...inputProps}
      />
      <FormHelperText className="form-error" variant="standard">
        {error?.message}
      </FormHelperText>
    </FormControl>
  );
};

export default MaskedField;
