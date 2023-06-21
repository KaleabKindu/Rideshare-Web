import withAdminLayout from '@/components/common/admin/withAdminLayout'
import { useRouter } from 'next/router'
import React from 'react'

type UserProps = {}

const User = (props: UserProps) => {
  const router = useRouter()
  return (
    <div>User {router.query.userId}</div>
  )
}

export default withAdminLayout(User)