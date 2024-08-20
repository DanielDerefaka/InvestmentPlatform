import AllUsers from '@/components/admin/users/AllUsers'
import BreadCrumb from '@/components/navbar/admin-breadcumb'
import React from 'react'

const page = () => {
  return (
    <div>
          <BreadCrumb/>
          <AllUsers/>
    </div>
  )
}

export default page