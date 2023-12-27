import React from 'react';

type InputType = {
  name: string;
  value?: string;
  type?: string;
  onChange?: (e: any) => void;
  className?: string;
  onKeyDown?: (e: any) => void;
  disabled?: boolean;
};

const Input = ({
  name,
  value,
  type = 'text',
  onChange,
  onKeyDown,
  disabled,
  className,
}: InputType) => {
  return (
    <input
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      type={type}
      disabled={disabled}
      className={`flex-1 bg-transparent border-2 border-gray-300 rounded-full px-3 py-1 placeholder-grey-300 ${className}`}
      placeholder={'Enter ' + name}
    />
  );
};

export default Input;
