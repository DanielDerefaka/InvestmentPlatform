import AdminTransaction from '@/components/admin/transactions/AdminTransaction'
import BreadCrumb from '@/components/navbar/admin-breadcumb'
import React from 'react'

const page = () => {
  return (
    <div>
          <BreadCrumb/>
        <div className='mt-5'>
        <AdminTransaction/>
        </div>
    </div>
  )
}

export default page