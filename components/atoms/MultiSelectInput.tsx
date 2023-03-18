import React, { FC, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { displayName } from "@design-systems/utils";

interface Option {
  value: number;
  label: string;
}

interface InputSelectProps {
  options: Option[];
}

export const MultiSelectInput: FC<InputSelectProps> = ({ options }) => {
  const [selectedOptions, setSelectedOption] = useState<number[]>([]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption([...selectedOptions, Number(event.target.value)]);
  };

  const selectableOptions = () => {
    return options.filter((option) => !selectedOptions.includes(option.value));
  };

  const removeItem = (removeItem: number) => {
    const indexToRemove = selectedOptions.indexOf(removeItem);

    if (indexToRemove !== -1) {
      const newSelectedItems = [
        ...selectedOptions.slice(0, indexToRemove),
        ...selectedOptions.slice(indexToRemove + 1),
      ];
      setSelectedOption(newSelectedItems);
    }
  };

  const selectedLabel = (item: number) => {
    const selectedItem = options.find((option) => option.value === item);
    if (!selectedItem) return "";
    return selectedItem.label;
  };

  return (
    <div className="relative">
      <div className="flex">
        {selectedOptions.map((optionValue) => (
          <label key={optionValue} className="flex items-center">
            <span className="ml-2 rounded-3xl bg-blue-500 p-3 font-bold text-white">
              {selectedLabel(optionValue)}
            </span>
            <XMarkIcon
              onClick={() => removeItem(optionValue)}
              className="ml-1 h-4 w-4 cursor-pointer"
            />
          </label>
        ))}
      </div>

      <div className="flex">
        <select
          id="my-select"
          onChange={handleSelectChange}
          className="w-full appearance-none rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="">選択してください</option>
          {selectableOptions().map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <ChevronDownIcon className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};