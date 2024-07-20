'use client'
import { SignUUp } from '@/Services/auth'
import { RegisterProps } from '@/Utils/auth-type'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { ErrorMsg } from '../Error/page'
import { schema } from '@/Validation/validateurForm'
import { yupResolver } from '@hookform/resolvers/yup'


const SignUp = () => {
  const { push } = useRouter()
  const { register, handleSubmit, formState: { errors }} =
   useForm<RegisterProps>({ mode: "all", resolver: yupResolver(schema) });
	const onSubmit: SubmitHandler<RegisterProps> = (data) =>
		SignUUp(data)
      .then((res) => {
        if (res.status === 403) {
          toast.error("Email Already Token")
        }
        if (res.status == 201) {
          toast.success("Register Successfully");
          push("/login");
        }
			})
			.catch((e) => toast("Tu m'enmerde"));
  return (
    <div>
      <div className="flex h-screen w-full items-center justify-center bg-white bg-cover bg-no-repeat">
    <div className="text-white">
      <div className="mb-8 flex flex-col items-center">
              <Image src={'/Saucisson.png'} height={1000} width={300} alt="" className='rounded-lg mt-4 border-2 border-black' />
        <h1 className="mt-2 text-2xl text-black">Register</h1>
      </div>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center'>
        <div className="mb-4 text-lg">
              <input className="px-6 py-2 text-center text-black placeholder-black placeholder-opacity-40  border border-black" type="email"placeholder="your@email.com"
                {...register('email', { required: true })} />
              {errors.email && <ErrorMsg error={"email"} />}
        </div>

        <div className="mb-4 text-lg">
              <input className="border border-black px-6 py-2 text-center text-black placeholder-black placeholder-opacity-40" type="text" placeholder="your name"
                {...register('name', { required: true })} />
              {errors.name && <ErrorMsg error={"name"}/> }
            </div>
            <div className="mb-4 text-lg">
              <input className="border border-black px-6 py-2 text-center text-black placeholder-black placeholder-opacity-40" type="password" placeholder="*********"
                {...register('password', { required: true })} />
              {errors.password && <ErrorMsg error={'password'} />}
            </div>
        <div className="mt-8 flex justify-center text-lg text-black">
          <button type="submit" className="px-10 py-2 text-black border border-black transition-colors duration-300 hover:bg-black hover:text-white rounded-full bg-gray-300">Register</button>
            </div>
            <p className='text-black m-2'>If you are member click
              <Link href={'/login'} > here</Link></p>

      </form>
    </div>
  </div>
    </div>
  )
}

export default SignUp
