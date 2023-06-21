import withAdminLayout from '@/components/common/admin/withAdminLayout'
import Head from 'next/head'
import React from 'react'

type Props = {}

const index = (props: Props) => {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div>Dashboard</div>
    </div>
  )
}

export default withAdminLayout(index)