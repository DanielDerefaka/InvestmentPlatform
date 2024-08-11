import Infobar from '@/components/Infobar'
import InvestmentCard from '@/components/investment/card'
import InvestmentTable from '@/components/investment/investmentTransaction'
import React from 'react'

const page = () => {
  return (
    <div>
          <Infobar />
          <InvestmentCard/>
        <div className='mt-10'>
          <div className='mb-3'>
          <h1 className='font-bold text-2xl'> Investment Transactions</h1>
          <p className='text-sm dark:text-white text-slate-400'>Detailed List on Investment Made </p>
   
          </div>
             <InvestmentTable/>
        </div>
    </div>
  )
}

export default page