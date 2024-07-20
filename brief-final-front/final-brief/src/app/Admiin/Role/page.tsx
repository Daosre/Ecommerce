'use client'
import Footer from '@/Components/Footer/page'
import Header from '@/Components/Header/page'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa6'

const RolePage = () => {
  const { back } = useRouter()
  return (
    <div>
      <Header />
      <FaArrowLeft className='cursor-pointer m-2' onClick={() => {
          back() 
      }} />
          <div>
              
          </div>
          <Footer/>
    </div>
  )
}

export default RolePage
