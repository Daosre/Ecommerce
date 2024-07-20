import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex justify-center'>
      <Image width={1000} height={500} src={'/Saucisson.png'} alt='Logo' className='h-60 object-cover md:w-1/2 lg:w-1/6 lg:m-0 lg:h-full  md:border md:m-2  md:rounded-lg md:border-black duration-1000'/>
    </div>
  )
}

export default Logo
