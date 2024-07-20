'use client'
import { ErrorMsg } from '@/Components/Error/page'
import Footer from '@/Components/Footer/page'
import Header from '@/Components/Header/page'
import { GetAllCategory } from '@/Services/category'
import { AddProduct } from '@/Services/product'
import { CategoryList } from '@/Utils/category-type'
import { AddProductProps } from '@/Utils/product-type'
import { CreateProduct } from '@/Validation/validateurForm'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaArrowLeft } from 'react-icons/fa6'
import { toast } from 'react-toastify'

const ProductPage = () => {
  const { back, push } = useRouter()
  const { register, handleSubmit, formState: {errors}} = useForm<AddProductProps>({ mode: "all", resolver: yupResolver(CreateProduct) })
  const onSubmit: SubmitHandler<AddProductProps> = (data) =>{
    AddProduct(data).then((res) => {      
      if (res.status === 201) {
        toast.success('Create Product Sucessfull',
          {
            position: "top-center",
            autoClose: 1000,
          }
        )
        setTimeout(() => {
          push("../Accueil");
        }, 1100);
      }
    }).catch((e) => { })
  }
  const [category, categoryList] = useState<CategoryList[]>()
  useEffect(() => {
    GetAllCategory().then((res) => {
      categoryList(res.data)
    })
  },[])
  return (
    <div>
      <Header />
      <FaArrowLeft className='cursor-pointer m-2' onClick={() => {
          back() 
      }} />
          <div>
          <div className="flex h-screen w-full items-center justify-center bg-white bg-cover bg-no-repeat">
    <div className="text-white">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl text-black">Create Product</h1>
            </div>
            
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center w-80 '>
              <div className="mb-4 text-lg flex flex-col">
              <label htmlFor="" className='text-black'>Name</label>
                <input className="px-6 py-2 text-center text-black placeholder-black placeholder-opacity-40  border border-black" type="text" placeholder="...."
                  {...register('name', { required: true })} />
                {errors.name && <ErrorMsg error={'Name'}/>}
              </div>
              
              <div className="mb-4 text-lg flex flex-col">
              <label htmlFor="" className='text-black'>Description</label>
                <input className="border border-black px-6 py-2 text-center text-black placeholder-black placeholder-opacity-40" type="text" placeholder="...."
                  {...register('description', { required: true })} />
                {errors.description && <ErrorMsg error={'description'}/>}
              </div>
              
              <div className="mb-4 text-lg flex flex-col">
              <label htmlFor="" className='text-black'>Price</label>
                <input className="border border-black px-6 py-2 text-center text-black placeholder-black placeholder-opacity-40" type="number" placeholder="0€"
                   {...register('price', { required: true })} />
                  {errors.price && <ErrorMsg error={'Price'}/>}
              </div>
              <div className="mb-4 text-lg flex flex-col">
                <label htmlFor="" className='text-black'>Quantity</label>
                <input className="border border-black px-6 py-2 text-center text-black placeholder-black placeholder-opacity-40" type="number" placeholder="0"
                  {...register('quantity', { required: true })}
                />
                {errors.quantity && <ErrorMsg error={'quantity'}/>}
              </div>
              <div className="mb-4 text-lg flex flex-col justify-center items-center">
                <label htmlFor="" className='text-black'>Image</label>
                <input className="border border-black p-2 w-72 text-center text-black placeholder-black placeholder-opacity-40" type="file" placeholder="0"
                  {...register('image', { required: true })}
                />
                {errors.image && <ErrorMsg error={'image'}/>}
              </div>
              <div className="mb-4 text-lg flex flex-col justify-center items-center">
                <label htmlFor="" className='text-black'>Category</label>
                <select id="" className='border border-black text-black p-2'
                {...register('categoryId', { required: true})}>
                  {category && 
                    category.map((cat) => {
                      return (
                        <option
                          key={cat.id}
                          value={cat.id}>{cat.name}
                        </option>
                    )
                  })}
                </select>
        </div>
        <div className="mt-8 flex justify-center text-lg text-black">
          <button type="submit" className="px-10 py-2 text-black border border-black transition-colors duration-300 hover:bg-black hover:text-white bg-gray-300 rounded-full">Create</button>
            </div>
      </form>
    </div>
  </div>
          </div>
          <Footer/>
    </div>
  )
}

export default ProductPage
