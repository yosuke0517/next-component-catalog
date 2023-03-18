import React, { FC, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface Option {
  value: string;
  label: string;
}

interface InputSelectProps {
  options: Option[];
}

export const SingleSelectInput: FC<InputSelectProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="relative flex ">
      <select
        id="my-select"
        value={selectedOption}
        onChange={handleSelectChange}
        className="w-full appearance-none rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      >
        <option value="">選択してください</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <ChevronDownIcon className="h-4 w-4" />
      </div>
    </div>
  );
};
