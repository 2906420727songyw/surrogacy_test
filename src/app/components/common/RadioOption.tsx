'use client';

interface RadioOptionProps {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function RadioOption({ name, value, label, checked, onChange }: RadioOptionProps) {
  return (
    <label className="flex items-center space-x-3 cursor-pointer group">
      <div className="relative">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="appearance-none w-[22px] h-[22px] border border-white rounded-[2px] bg-transparent 
          checked:border-[1.5px] checked:border-white cursor-pointer"
        />
        {checked && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          w-[16px] h-[16px] bg-white rounded-[1px] pointer-events-none" />
        )}
      </div>
      <span className="text-white text-[14px] opacity-80 group-hover:opacity-100">
        {label}
      </span>
    </label>
  );
} 