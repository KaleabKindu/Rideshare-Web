import UserDetail from '@/components/admin/users/UserDetail'
import withAdminLayout from '@/components/common/admin/withAdminLayout'
import { useRouter } from 'next/router'
import React from 'react'

type UserProps = {}

const User = (props: UserProps) => {
  const router = useRouter()
  return (
    <div>
      <UserDetail id='' />
    </div>
  )
}

export default withAdminLayout(User)