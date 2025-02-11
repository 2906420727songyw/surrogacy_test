import React from 'react';

interface CustomInputProps {
  label: string;
  name: string;
  value: string;
  type?: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  name,
  value,
  type = 'text',
  required = false,
  onChange
}) => {
  const cleanLabel = label.replace(/\s*\*\s*$/, '');
  
  return (
    <div className="relative">
      <label className="block text-white/60 text-[14px] mb-2">
        {cleanLabel}{required && '*'}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full h-[48px] bg-transparent border-b border-white/60 px-0 text-[14px] md:text-[16px] text-white focus:outline-none"
        autoComplete="off"
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck="false"
        data-form-type="other"
        aria-autocomplete="none"
      />
      <input
        type="text"
        style={{ display: 'none' }}
        name={`hidden-${name}`}
        tabIndex={-1}
      />
    </div>
  );
};

export default CustomInput; 