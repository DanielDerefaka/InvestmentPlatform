import Dashpage from '@/components/dashboard/Dashpage'
import Infobar from '@/components/Infobar'
import React from 'react'

const page = () => {
  return (
    <div className=''>
          <Infobar />
     <div className='mt-2'>
     <Dashpage/>
     </div>
    </div>
  )
}

export default page