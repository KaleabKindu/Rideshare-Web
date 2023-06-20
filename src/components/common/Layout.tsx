import React, { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

type LayoutProps = {
    children:ReactNode
}

const Layout = ({children}: LayoutProps) => {

  return (
    <>
        <Header />
        <div className='pt-16 h-screen'>
            {children}
        </div>
        <Footer />
    </>
  )
}

export default Layout