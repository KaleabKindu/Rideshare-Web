import withAdminLayout from '@/components/common/admin/withAdminLayout'
import Head from 'next/head'
import React from 'react'

type UsersProps = {}

const Users = (props: UsersProps) => {
  return (
    <div>
      <Head>
        <title>Users</title>
      </Head>
      <div>Users</div>
    </div>
  )
}

export default withAdminLayout(Users)