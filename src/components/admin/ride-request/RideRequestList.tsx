import React from 'react'
import TrialRequest from './TrialRequest'
import FilterList from './FilterList'
import RideRequestItem from './RideRequestItem';
import ride_requests from "@/data/admin/ride-request.json"

const item = ride_requests[0]

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];


const RideRequestList = () => {
  const handleSelect = (value: string) => {
    console.log('Selected value:', value);
    // Do something with the selected value
  };

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // Perform search logic with the query
  };


  return (

    <div>
        
        <div>
      <FilterList options={options} onSelect={handleSelect} onSearch = {handleSearch}/>
    </div>
        {/* <TrialRequest/> */}


        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
    <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
                <th scope="col" className="py-3.5 px-4 ml-2 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    
                        {/* <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"/> */}
                        <span className='text-center'>Commuter</span>
                    
                </th>
                <th scope="col" className="py-3.5 px-3 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                        {/* <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"/> */}
                        <span>Origin</span>

                    </div>
                </th>
                <th scope="col" className="py-3.5 px-2 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                        {/* <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"/> */}
                        <span>Destination</span>
                        
                    </div>
                </th>
                <th scope="col" className="py-3.5 px-1.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-x-1">
                        {/* <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"/> */}
                        <span>Current Fare(birr)</span>
                        
                    </div>
                </th>

                <th scope="col" className="py-3.5 px-1.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-x-1">
                        {/* <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"/> */}
                        <span>Number of Seats</span>
                        
                    </div>
                </th>
                <th scope="col" className="py-3.5 px-2 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                        {/* <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"/> */}
                        <span>Status</span>
                        
                    </div>
                </th>
                
                <th scope="col" className="py-3.5 px-2 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                        {/* <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"/> */}
                        <span>Date</span>
                        
                    </div>
                </th>
                
                <th scope="col" className="py-3.5 px-2 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                        {/* <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"/> */}
                        <span>Action</span>
                        
                    </div>
                </th>
                

            </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
          
          {
            ride_requests.map((request)=> 
              <RideRequestItem name={request.name} origin={request.Origin} destination={request.Destination} currentFare={request.CurrentFare} numberOfSeats={request.NumberOfSeats} status={request.Status} dateTime={request.CreatedDateTime}/>
            
            )
          }
            
          
            <RideRequestItem name={item.name} origin={item.Origin} destination={item.Destination} currentFare={item.CurrentFare} numberOfSeats={item.NumberOfSeats} status={item.Status} dateTime={item.CreatedDateTime}/>
          
        </tbody>
    </table>
    </div>
    </div>
    </div>
        
        
        
    </div>
    
  )
}

export default RideRequestList