'use client'
import Footer from '@/Components/Footer/page'
import Header from '@/Components/Header/page'
import { DeleteCategory, GetAllCategory } from '@/Services/category'
import { CategoryList } from '@/Utils/category-type'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa6'
import { IoIosAdd } from 'react-icons/io'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const CategoryPage = () => {
  const [category, categorylist] = useState<CategoryList[]>()
  const { back } = useRouter()


    useEffect(() => {
      GetAllCategory().then((res) => {
            categorylist(res.data)
        })
    },[] )
  return (
    <div>
      <Header />
      <FaArrowLeft className='cursor-pointer m-2' onClick={() => {
          back() 
      }} />
          <div className=''>
          <TableContainer component={Paper}>
                              <Table sx={{ border: 2 }} aria-label="simple table">
                                <TableHead>
                                  <TableRow sx={{ backgroundColor: '#242423'}}>
                              <TableCell sx={{ color: 'white' }} className='flex text-center justify-around'>Name
                  <Link href={'./Create'}>
                    <IoIosAdd className='text-white text-center cursor-pointer' />
                  </Link> 
                              </TableCell>
                                  </TableRow>
                                </TableHead>
                    <TableBody>
                        {category &&
                            category.map((element) => {
                                return (
                                    <TableRow
                                        key={element.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row" className='flex justify-around'>
                                            {element.name}
                                            <MdEdit className='cursor-pointer' />
                                      <MdDelete className='cursor-pointer' onClick={() => {
                                        DeleteCategory(element.id)}} />
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                                </TableBody>
                              </Table>
                            </TableContainer>
          </div>
          <Footer/>
    </div>
  )
}

export default CategoryPage
