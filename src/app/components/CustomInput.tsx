import React from 'react';

interface CustomInputProps {
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  label: string;
  placeholder?: string;
}

export default function CustomInput({
  type,
  name,
  value,
  onChange,
  required = false,
  label,
  placeholder = ''
}: CustomInputProps) {
  return (
    <div className="mb-6 md:mb-[30px]">
      <label className="block text-white text-sm md:text-base mb-2 md:mb-3">
        {label} {required && '*'}
      </label>
      <input
        type={type === 'password' ? 'text' : type} // 初始设为text，防止浏览器识别
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        aria-label={label}
        className="w-full h-[40px] md:h-[50px] px-4 bg-white border-none text-sm md:text-base rounded-lg text-black"
        autoComplete="off"
        data-form-type="other"
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck="false"
        placeholder={placeholder}
        onFocus={(e) => {
          // 当获得焦点时，如果是密码字段，将类型改回password
          if (type === 'password') {
            e.currentTarget.type = 'password';
          }
        }}
        onBlur={(e) => {
          // 当失去焦点时，如果是密码字段，将类型改回text
          if (type === 'password') {
            e.currentTarget.type = 'text';
          }
        }}
      />
    </div>
  );
} 