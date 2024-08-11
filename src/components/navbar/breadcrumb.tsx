'use client'
import useSideBar from '@/context/use-sidebar'
import React from 'react'
import { Loader } from '../loader'
import { Switch } from '../ui/switch'

type Props = {}

const BreadCrumb = (props: Props) => {
  const {
    
    expand,
    loading,

    onExpand,
    page,
    onSignOut,
 
  } = useSideBar()
  return (
    <div className="flex flex-col ">
      <div className="flex gap-5 items-center">
        <h2 className="text-3xl font-bold capitalize">{page}</h2>
  
      </div>
      <p className="text-gray-500 text-sm">
        {page == 'settings'
          ? 'Manage your account settings, preferences and integrations'
          : page == 'dashboard'
          ? 'A detailed overview of your metrics, and account detaills'
          : page == 'transaction'
          ? 'View and users transactions'
          : page == 'deposit'
          ? 'Fund your account'
          : page == 'withdraw'
          ? 'Withdraw Funds from your account'
          : page == 'profile'
          ? 'Users Profile details'
          : page == 'investments'
          ? 'At a glance summary of your investment.'
           : page == 'plans'
          ? 'Here is our several investment plans. You can invest daily, weekly or monthly and get higher returns in your investment.'
          : ''}
      </p>
    </div>
  )
}

export default BreadCrumb