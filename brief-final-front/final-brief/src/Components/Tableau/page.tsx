'use client'
import { GetAllProduct } from '@/Services/product'
import { AddProductProps, ProductProps } from '@/Utils/product-type'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Tableau = ({ productList, setproductList } : { productList: ProductProps[], setproductList: Dispatch<SetStateAction<ProductProps[]>> }) => {
    const [product, setproduct] = useState<AddProductProps[]>()

    useEffect(() => {
        GetAllProduct().then((res) => {
            setproductList(res.data)
        })
    }, [])
    return (
      <div className='m-10'>
        
                            <TableContainer component={Paper}>
                              <Table sx={{ minWidth: 650, border: 2 }} aria-label="simple table">
                                <TableHead>
                                  <TableRow sx={{ backgroundColor: '#242423'}}>
                                    <TableCell sx={{color: 'white'}}>Name :</TableCell>
                                    <TableCell sx={{color: 'white'}} align="center">Quantity: </TableCell>
                                    <TableCell sx={{color: 'white'}} align="center">Price :</TableCell>
                                  </TableRow>
                                </TableHead>
                    <TableBody>
                        {productList &&
                            productList.map((element) => {
                                return (
                                    <TableRow
                                        key={element.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row">
                                            {element.name}
                                        </TableCell>
                                        <TableCell align="center">{element.quantity}</TableCell>
                                        <TableCell align="center">{element.price}€ / U</TableCell>
                                    </TableRow>
                                )
                            })}
                                </TableBody>
                              </Table>
                            </TableContainer>
    </div>
    
  )
}

export default Tableau