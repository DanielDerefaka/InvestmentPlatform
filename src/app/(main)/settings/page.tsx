import Infobar from '@/components/Infobar'
import BreadCrumb from '@/components/navbar/breadcrumb'
import ChangePassword from '@/components/settings/change-password'
import DarkModetoggle from '@/components/settings/dark-mode-toggle'
import React from 'react'

interface Props {
    
}

const page = (props: Props) => {
    return (
        <div className=''>
           <Infobar/>
           <DarkModetoggle />
          <div className='mt-10'>
          <ChangePassword/>
          </div>
            

        </div>
    )
}

export default page
