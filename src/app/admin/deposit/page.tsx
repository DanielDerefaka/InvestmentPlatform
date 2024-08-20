import DepositsTransactions from '@/components/admin/deposits/DepositsTransactions'
import BreadCrumb from '@/components/navbar/admin-breadcumb'
import React from 'react'

const page = () => {
  return (
    <div>
          {/* <BreadCrumb/> */}

   <div className=''>
   <DepositsTransactions/>
   </div>

    </div>
  )
}

export default page