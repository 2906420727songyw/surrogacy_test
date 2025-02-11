import React from 'react';

interface InfoItemProps {
  label: string;
  value: string;
  name: string;
  isEditing: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InfoItem: React.FC<InfoItemProps> = ({
  label,
  value,
  name,
  isEditing,
  onChange
}) => {
  return (
    <div className="relative">
      <label className="block text-white/60 text-[14px] mb-2">
        {label}
      </label>
      {isEditing ? (
        name === 'dateOfBirth' ? (
          // 日期输入框
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
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck="false"
              data-form-type="other"
              aria-autocomplete="none"
            />
          </div>
        ) : (
          // 普通输入框
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-white/60"></div>
            <input
              type={name === 'email' ? 'email' : name === 'phoneNumber' ? 'tel' : 'text'}
              name={name}
              value={value}
              onChange={onChange}
              className="w-full h-[48px] bg-transparent px-0 text-[14px] md:text-[16px] text-white focus:outline-none"
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck="false"
              data-form-type="other"
              aria-autocomplete="none"
            />
          </div>
        )
      ) : (
        // 非编辑状态显示值
        <div className="text-white text-[14px] md:text-[16px] h-[48px] flex items-center">
          {value}
        </div>
      )}
    </div>
  );
};

export default InfoItem; 