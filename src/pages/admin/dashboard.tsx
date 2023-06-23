import withAdminLayout from '@/components/common/admin/withAdminLayout'
import { useAppSelector } from '@/store/hooks'
import Head from 'next/head'
import React from 'react'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div>Dashboard</div>
    </div>
  )
}

export default withAdminLayout(Dashboard)