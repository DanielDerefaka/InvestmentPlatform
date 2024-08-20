import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import React from 'react'

const InvestmentFetch = () => {
  return (
    <div
   
    className=" w-full justify-between items-center border-b-2 py-5"
  >
    <div className="flex justify-between">
      <div className="flex gap-3">
        <Avatar>
          <AvatarFallback>
            JP
          </AvatarFallback>
        </Avatar>

        <div>
          <p className="text-sm font-bold">
            {" "}
            Jupiter - Monthly 9.5% for 1 Year
          </p>
          <div className="flex gap-5">
            <p className="text-sm text-gray-400">August 16 2024</p>
            
          </div>
        </div>
      </div>
      <div>
       
          <p className="text-sm text-red-600"> + 500 USD</p>
        
      </div>
    </div>
  </div>


  )
}

export default InvestmentFetch