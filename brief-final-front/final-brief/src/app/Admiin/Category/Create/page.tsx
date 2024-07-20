'use client'
import { ErrorMsg } from '@/Components/Error/page'
import Footer from '@/Components/Footer/page'
import Header from '@/Components/Header/page'
import { CreateCategoory } from '@/Services/category'
import { CreateCatProps } from '@/Utils/category-type'
import { CreateCategoryy, schema } from '@/Validation/validateurForm'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaArrowLeft } from 'react-icons/fa6'
import { toast } from 'react-toastify'

const CreateCategory = () => {  
  const { push, back } = useRouter()
  const { register, handleSubmit, formState: {errors}} = useForm<CreateCatProps>({ mode: "all", resolver: yupResolver(CreateCategoryy) })
  const onSubmit: SubmitHandler<CreateCatProps> = (data) =>
    CreateCategoory(data).then((res) => {
      if (res.status === 403) {
        toast.error("Name Already token")
      }
      if (res.status === 400) {
        toast.error(res.response.data.message)
      }
      if (res.status === 201) {
        toast.success('Create Category Sucessfull'), {
          position: "top-center",
          autoClose: 1000,
        }
        setTimeout(() => {
          push("./All");
        }, 1500);
      }
    }).catch((e) => { })
  
  return (
      <div>
      <Header />
      <FaArrowLeft className='cursor-pointer' onClick={() => {
          back() 
      }} />
      <div className="flex h-screen w-full items-center justify-center bg-white bg-cover bg-no-repeat">
    <div className="text-white">
      <div className="mb-8 flex flex-col items-center">
        <h1 className="mb-2 text-2xl text-black">Create Category</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}  className='flex flex-col items-center'>
        <div className="mb-4 text-lg">
              <input className="px-6 py-2 text-center text-black placeholder-black placeholder-opacity-40  border border-black" type="text" placeholder="Name of Category"
                {...register('name', { required: true })}
              />
              {errors.name && <ErrorMsg error={"name"} />}
              </div>    
              <button type="submit" className="px-10 py-2 text-black border border-black transition-colors duration-300 hover:bg-black hover:text-white bg-gray-300 rounded-full">Create</button>
      </form>
    </div>
          </div>
          <Footer/>
    </div>
  )
}

export default CreateCategory
