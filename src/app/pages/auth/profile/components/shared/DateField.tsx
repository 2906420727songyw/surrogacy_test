'use client';

export default function DateField({ label, name, value, onChange }: DateFieldProps) {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-white text-[12px] md:text-[14px]">
        {label}
      </label>
      <div className="relative">
        <input
          type="date"
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full h-[40px] md:h-[48px] rounded-[4px] bg-white px-4 text-[12px] md:text-[14px] text-transparent
            [&::-webkit-calendar-picker-indicator]:opacity-0 
            [&::-webkit-calendar-picker-indicator]:absolute
            [&::-webkit-calendar-picker-indicator]:w-full
            [&::-webkit-calendar-picker-indicator]:h-full
            [&::-webkit-calendar-picker-indicator]:cursor-pointer
            [&::-webkit-datetime-edit-text]:hidden
            [&::-webkit-datetime-edit-year-field]:hidden
            [&::-webkit-datetime-edit-month-field]:hidden
            [&::-webkit-datetime-edit-day-field]:hidden
            relative
          `}
          placeholder=""
        />
        <div className="absolute inset-0 pointer-events-none flex items-center px-4 text-black">
          {value ? value : ''}
        </div>
      </div>
    </div>
  );
}

interface DateFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
} 