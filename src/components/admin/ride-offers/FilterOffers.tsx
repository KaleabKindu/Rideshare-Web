import React from "react";
import { useState } from "react";

type Option = {
  value: string;
  label: string;
};

type DropdownProps = {
  options: Option[];
  onSelect: (value: string) => void;
  onSearch: (query: string) => void;
};

const FilterOffers: React.FC<DropdownProps> = ({
  options,
  onSelect,
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  const [selectedValue, setSelectedValue] = useState("");

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    onSelect(value);
  };
  return (
    <div className="flex px-5 py-10 justify-center gap-10">
      <div className="border-2 border-blue-500 w-max px-3 py-3 text-red-500">
        <select value={selectedValue} onChange={handleSelect}>
          <option value="">Status</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="w-2/5 border-2 border-black-500 rounded-lg px-2 py-3">
        <form onSubmit={handleFormSubmit}>
          <input
            className="text-center"
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="Search..."
          />
          <button type="submit"></button>
        </form>
      </div>
    </div>
  );
};

export default FilterOffers;
