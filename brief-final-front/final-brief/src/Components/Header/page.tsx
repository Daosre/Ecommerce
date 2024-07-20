'use client'
import React from 'react'
import Logo from '../Logo/page'
import Link from 'next/link'
import LogOut from '../Logout/page'

const Header = () => {
  return (
      <div className='w-full border-2 border-black lg:flex lg:flex-col'>
          <div className='relative'>
              <Logo />
              <LogOut />
              <Link href={'/Admiin'}>
              <button className='absolute border border-black p-2 bg-white bottom-0 right-0 text-black m-2'>Admin panel</button>
              </Link>
          </div> 
      </div>
  )
}

export default Header
