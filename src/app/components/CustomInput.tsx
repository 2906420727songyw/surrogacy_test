import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

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
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordType = type === 'password';

  return (
    <div className="mb-6 md:mb-[30px]">
      <label className="block text-white text-sm md:text-base mb-2 md:mb-3">
        {label} {required && '*'}
      </label>
      <div className="relative">
        <input
          type={isPasswordType ? (showPassword ? 'text' : 'password') : type}
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
        />
        {isPasswordType && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1"
          >
            {showPassword ? (
              <EyeSlashIcon className="h-5 w-5 text-gray-500" />
            ) : (
              <EyeIcon className="h-5 w-5 text-gray-500" />
            )}
          </button>
        )}
      </div>
    </div>
  );
} 