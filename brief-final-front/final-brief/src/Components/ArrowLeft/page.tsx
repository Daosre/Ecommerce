'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa6'

const ArrowLeft = () => {
  const { back } = useRouter()
  return (
    <div>
       <FaArrowLeft className='cursor-pointer' onClick={() => {
          back() 
      }} />
    </div>
  )
}

export default ArrowLeft
