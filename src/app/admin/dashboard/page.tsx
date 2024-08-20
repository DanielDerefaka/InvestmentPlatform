import AdminCard from '@/components/admin/components/dashboard/AdminCard'
import AdminSection from '@/components/admin/components/dashboard/AdminSection'
import BreadCrumb from '@/components/navbar/admin-breadcumb'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <BreadCrumb/>
      <div>
        <AdminCard/>
        
       <AdminSection/>
      
      </div>
    </div>
  )
}

export default Dashboard