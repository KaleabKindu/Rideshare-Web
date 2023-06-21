import React, { ReactNode } from 'react'
import SideBar from './SideBar'
import AdminHeader from './AdminHeader'

type AdminLayoutProps = {
    children:ReactNode
}

const AdminLayout = ({children}: AdminLayoutProps) => {

  return (
    <>  
        <AdminHeader />
        <SideBar />
        <div className='mx-auto pt-24 md:ml-56 ml-16'>
            {children}
        </div>
    </>
  )
}

export default AdminLayout