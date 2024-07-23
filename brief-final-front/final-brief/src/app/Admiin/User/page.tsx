'use client'
import Footer from '@/Components/Footer/page'
import Header from '@/Components/Header/page'
import { DeleteUser, GetAllUser } from '@/Services/auth'
import { UserProps } from '@/Utils/auth-type'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { AiOutlineUserDelete } from 'react-icons/ai'
import { MdEdit } from 'react-icons/md'

const User = () => {
  const [user, getAlluser] = useState<UserProps[]>()

  useEffect(() => {
    GetAllUser().then((res) => {
      getAlluser(res.data)
    })
  },[])
  return (
    <div>
      <div>
      <Header/>
      <TableContainer component={Paper}>
                              <Table sx={{ minWidth: 650, border: 2 }} aria-label="simple table">
                                <TableHead>
                                  <TableRow sx={{ backgroundColor: '#242423'}}>
                                    <TableCell sx={{color: 'white'}}>Name :</TableCell>
                                    <TableCell sx={{ color: 'white' }} align="center">Email :</TableCell>
                                    <TableCell sx={{color: 'white'}} align="center">IsActive :</TableCell>
                                    <TableCell sx={{color: 'white'}} align="center">gdpr :</TableCell>
                                    <TableCell sx={{ color: 'white' }} align="center">created_at :</TableCell>
                                    <TableCell sx={{color: 'white'}} align="center">updated_at :</TableCell>
                                  </TableRow>
                                </TableHead>
                    <TableBody>
                        {user &&
                            user.map((element) => {
                                return (
                                    <TableRow
                                        key={element.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">{element.name} <AiOutlineUserDelete className='cursor-pointer' onClick={() => {
                                      DeleteUser(element.id)
                                      setTimeout(() => {
                                        window.location.reload()
                                      }, 1500);
                                        }} /></TableCell>
                                    <TableCell align="center">{element.email}</TableCell>
                                    <TableCell align="center" className='gap-2 items-center flex flex-col'><MdEdit className='cursor-pointer' />{String(element.isActive)}</TableCell>
                                    <TableCell align="center">{new Date(element.gdpr).toLocaleDateString('FR')}</TableCell>
                                    <TableCell align="center">{new Date(element.created_at).toLocaleDateString('FR')}</TableCell>
                                    <TableCell align="center">{new Date(element.updated_at).toLocaleDateString('FR')}</TableCell>
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

export default User
