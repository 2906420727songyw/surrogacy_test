'use client';

import { useState } from 'react';

interface DateFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export default function DateField({ label, name, value, onChange }: DateFieldProps) {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-white text-[12px] md:text-[14px]">
        {label}
      </label>
      <input
        type="date"
        name={name}
        value={value}
        onChange={onChange}
        placeholder="YYYY/MM/DD"
        className={`w-full h-[40px] md:h-[48px] rounded-[4px] bg-white px-4 text-[12px] md:text-[14px]
          [&::-webkit-calendar-picker-indicator]:opacity-0 
          [&::-webkit-calendar-picker-indicator]:absolute
          [&::-webkit-calendar-picker-indicator]:w-full
          [&::-webkit-calendar-picker-indicator]:h-full
          [&::-webkit-calendar-picker-indicator]:cursor-pointer
          relative
        `}
      />
    </div>
  );
} 