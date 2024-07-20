'use client'
import Footer from '@/Components/Footer/page'
import Header from '@/Components/Header/page'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa6'

const AdminPanel = () => {
    const { back } = useRouter()
  return (
      <div>
          <Header />
          <FaArrowLeft className='cursor-pointer m-2' onClick={() => {
          back() 
      }} />
          <h1 className='flex justify-center m-2 text-3xl'>Admin Panel</h1>
          <div className='w-full text-center h-screen place-content-center'>
              <p>Veuillez Selectionner ce que vous voulez faire</p>
              <div className='p-4 flex flex-col gap-10'>
          <Link href={'Admiin/Category/All'}>
              <button className='border border-black p-2 rounded-lg w-1/2'>Category</button>
          </Link>
          <Link href={'Admiin/Product'}>
              <button className='border border-black p-2 rounded-lg w-1/2'>Product</button>
          </Link>
          <Link href={'Admiin/Role'}>
              <button className='border border-black p-2 rounded-lg w-1/2'>Role</button>
              </Link>
              </div>
          </div>
          <Footer/>
    </div>
  )
}

export default AdminPanel
