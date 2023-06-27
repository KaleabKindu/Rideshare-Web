import React from 'react'

import { useState } from 'react';
import {useSearchRequestsByNameQuery, useFilterByStatusQuery} from "@/store/api/ride-request/ride-request"
import RideRequestItem from './RideRequestItem';

type Option = {
  value: string;
  label: string;
};

type DropdownProps = {
  options: Option[];
  onSelect: (value: string) => void;
  onSearch: (query: string) => void;
};

const FilterList: React.FC<DropdownProps> = ({ options, onSelect, onSearch}) => {

  //state for the search query
  const [searchQuery, setSearchQuery] = useState('');

  const [selectedValue, setSelectedValue] = useState('');

  const {
    data: response,
    isLoading,
    isError,
  } = useSearchRequestsByNameQuery(searchQuery);
  
  const status_response = useFilterByStatusQuery(selectedValue);
  const st_res = status_response.data;
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchQuery(event.currentTarget.search.value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    
  };

  return (
    <div  className = "flex px-5 py-10 justify-center">
      
        <select value={selectedValue} onChange={handleSelect} className='border-2 border-blue-500 w-max px-3 py-3 text-red-500'>
      <option value="" >Status</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    <div className = "">
    {Array.from({length:10}).map((_, index) => (
                  <RideRequestItem key={index}/>
                ))}
     
    </div>
   
    <form onSubmit={handleSearch} className="w-2/5 border-2 border-black-500 rounded-lg px-2 py-3">
        
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            name="search"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleInputChange}
          />
          {/* <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Search
          </button> */}
        
      </form>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error fetching search results</div>}
      <div className = "">
      {Array.from({length:10}).map((_, index) => (
                  <RideRequestItem key={index}/>
                ))}

      </div>
    </div>
    
    

    
 
    
    
  );
};

export default FilterList;
