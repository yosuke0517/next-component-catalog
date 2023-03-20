import React, { FC, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { SelectOption } from "~/types";


export type InputSelectProps = {
  options: SelectOption[];
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
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <ChevronDownIcon className="h-4 w-4" />
      </div>
    </div>
  );
};
