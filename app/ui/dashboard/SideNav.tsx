'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const SideNav = () => {
  const path = usePathname()
  return (
    <div className='flex w-32 flex-col border border-gray-300 gap-4 bg-gray-300 p-2 h-[700px]'>
        <div className='bg-blue-400 p-2 pt-6 text-white rounded-md'>Navbar</div>
        <Link className={clsx('text-gray-600',{'bg-blue-300' : path=='/dashboard'})} href={'/dashboard'}>Dashboard</Link>
        <Link className={clsx('text-gray-600',{'bg-blue-300' : path=='/dashboard/customers'})} href={'/dashboard/customers'}>Customers</Link>
        <Link className={clsx('text-gray-600',{'bg-blue-300' : path=='/dashboard/invoices'})} href={'/dashboard/invoices'}>Invoices</Link>
    </div>
  )
}

export default SideNav