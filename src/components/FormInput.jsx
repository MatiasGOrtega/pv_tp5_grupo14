import { memo } from 'react';
const FormInput = memo(({ label, name, value, onChange, type = 'text', disabled = false, required = true }) => {
  console.log(`Rendering FormInput: ${name}`);
  return (
    <div>
      <label>{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
      />
    </div>
  );
});

export default FormInput;
