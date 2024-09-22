"use client";

import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

interface TextInputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  className?: string;
  onInputChange?: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  type = "text",
  placeholder = "",
  className = "",
  onInputChange,
}) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onInputChange) {
      onInputChange(newValue);
    }
  };

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <CiSearch className="h-5 w-5 text-gray-500" />
        </span>
      </div>
    </div>
  );
};

export default TextInput;
