import React from 'react'
import SideNav from '../ui/dashboard/SideNav'

const Layout = ({children}:{children: React.ReactNode}) => {
  return (
    <div className='flex'>
        <div><SideNav/></div>
        <div>{children}</div>
    </div>
  )
}

export default Layout