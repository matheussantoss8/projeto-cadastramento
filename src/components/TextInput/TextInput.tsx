"use client";

import React from "react";
import { CiSearch } from "react-icons/ci";

interface TextInputProps {
  label?: string;
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  className = "",
}) => {
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
          onChange={onChange}
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
