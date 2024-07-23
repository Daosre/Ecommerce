import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-24 bg-black text-white flex justify-around text-center relative bottom-0'>
          <Link href={"/"} className='flex items-center'>About Us</Link>
          <p className='w-1/2 text-center flex items-center'>Compagny Developement : Daorse & Tech</p>
    </div>
  )
}

export default Footer
