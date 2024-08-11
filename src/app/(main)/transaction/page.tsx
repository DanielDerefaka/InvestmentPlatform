import Infobar from '@/components/Infobar'
import TransactionsTable from '@/components/transaction/transaction-table'
import React from 'react'

const page = () => {
  return (
    <div>
          <Infobar />
          <TransactionsTable/>
    </div>
  )
}

export default page