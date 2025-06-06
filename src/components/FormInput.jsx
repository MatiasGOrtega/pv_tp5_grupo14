import { memo } from 'react';
import { Box, TextField } from '@radix-ui/themes';
const FormInput = memo(({ label, name, value, onChange, type = 'text', disabled = false, required = true }) => {
  return (
    <Box mb="2">
      <label htmlFor={name}>{label}</label>
      <TextField.Root
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
      />
    </Box>
  );
});

export default FormInput;
