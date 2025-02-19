'use client';

import React from 'react';
import { useLanguage } from '@/app/language/';

interface DateFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DateField: React.FC<DateFieldProps> = ({
  label,
  name,
  value,
  onChange
}) => {
  const cleanLabel = label.replace(/\s*\*\s*$/, '');

  return (
    <div className="relative">
      <label className="block text-white text-[14px] mb-2">
        {cleanLabel}*
      </label>
      <div className="relative">
        <input
          type="date"
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full h-[48px] bg-transparent border-b border-white/60 px-0 text-[14px] md:text-[16px] text-white focus:outline-none
            [&::-webkit-datetime-edit-fields-wrapper]:opacity-0
            [&::-webkit-datetime-edit]:opacity-0
            [&::-webkit-calendar-picker-indicator]:filter 
            [&::-webkit-calendar-picker-indicator]:invert 
            [&::-webkit-calendar-picker-indicator]:opacity-50
            ${value ? '[&::-webkit-datetime-edit]:opacity-100 [&::-webkit-datetime-edit-fields-wrapper]:opacity-100' : ''}`}
        />
      </div>
    </div>
  );
};

export default DateField; 