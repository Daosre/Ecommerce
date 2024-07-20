import React, { Dispatch, SetStateAction } from 'react'
import Search from '../Search/page'
import { FaCartShopping } from "react-icons/fa6";
import Link from 'next/link';

const NavBar = ({ setsearch }: { setsearch: Dispatch<SetStateAction<string | undefined>> }) => {
  let ninja
  if (typeof window !== 'undefined') {
     ninja = window.localStorage.getItem('role')
  }
  return (
      <div>
      <div className='flex justify-around p-2 m-2'>
        {ninja === 'ac7ab280-7199-4512-aedd-bc90eb363669' && <Link href={'/Admiin/Product'}> <button className=''>Crée une annonce</button> </Link> }
        <FaCartShopping className='cursor-pointer' />
          </div>
      <Search setsearch={setsearch}/>
    </div>
  )
}

export default NavBar
