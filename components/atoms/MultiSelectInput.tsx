import React, { FC, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { SelectOption } from "~/types";

export type MultiSelectInputProps = {
  options: SelectOption[];
}

export const MultiSelectInput: FC<MultiSelectInputProps> = ({ options }) => {
  const [selectedOptions, setSelectedOption] = useState<number[]>([]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption([...selectedOptions, Number(event.target.value)]);
  };

  const selectableOptions = () => {
    return options.filter((option) => !selectedOptions.includes(option.id));
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
    const selectedItem = options.find((option) => option.id === item);
    if (!selectedItem) return "";
    return selectedItem.name;
  };

  return (
    <div className="relative w-full">
      <div className="flex">
        <ul className="flex flex-wrap gap-2">
        {selectedOptions.map((optionValue) => (
          <li key={optionValue} className="flex items-center">
            <span className="ml-2 rounded-3xl bg-blue-500 px-2 py-1 text-sm font-bold text-white">
              {selectedLabel(optionValue)}
            </span>
            <XMarkIcon
              onClick={() => removeItem(optionValue)}
              className="ml-1 h-4 w-4 cursor-pointer"
            />
          </li>
        ))}
        </ul>
        
      </div>

      <div className="flex relative mt-2">
        <select
          id="my-select"
          onChange={handleSelectChange}
          className="w-full appearance-none rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="">選択してください</option>
          {selectableOptions().map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
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
