'use client'
import { SignIIn } from '@/Services/auth'
import { LoginProps } from '@/Utils/auth-type'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { ErrorMsg } from '../Error/page'

const SignIn = () => {
  const { push } = useRouter()
  const { register, handleSubmit, formState: {errors}} = useForm<LoginProps>()
  const onSubmit: SubmitHandler<LoginProps> = (data) =>
    SignIIn(data).then((res) => {
    window.localStorage.setItem('jwt', res.data.tok.access_token);
    window.localStorage.setItem('role', res.data.role)
    toast.success("Login Sucessfull ✅", {
      position: "top-right",
      autoClose: 1500,
    });
    setTimeout(() => {
      push("/Accueil");
    }, 1500);
  }).catch((e) => {})
  return (
    <div>
<div className="flex h-screen w-full items-center justify-center bg-white bg-cover bg-no-repeat">
    <div className="text-white">
      <div className="mb-8 flex flex-col items-center">
              <Image src={'/Saucisson.png'} height={100} width={300} alt="" className='rounded-lg m-2 border-2 border-black' />
        <h1 className="mb-2 text-2xl text-black">Login</h1>
      </div>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center'>
        <div className="mb-4 text-lg">
              <input className="px-6 py-2 text-center text-black placeholder-black placeholder-opacity-40  border border-black" type="email" placeholder="your@email.com"
                {...register('email', { required: true })} />
              {errors.email && <ErrorMsg error={"email"} />}
        </div>

        <div className="mb-4 text-lg">
              <input className="border border-black px-6 py-2 text-center text-black placeholder-black placeholder-opacity-40" type="password" placeholder="*********"
                {...register('password', { required: true })} />
              {errors.password && <ErrorMsg error={"password"}/>}
        </div>
        <div className="mt-8 flex justify-center text-lg text-black">
          <button type="submit" className="px-10 py-2 text-black border border-black transition-colors duration-300 hover:bg-black hover:text-white bg-gray-300 rounded-full">Login</button>
            </div>
            <p className='text-black m-2'>If you are not member click
              <Link href={'/register'} > here</Link></p>
      </form>
    </div>
  </div>
</div>
  )
}

export default SignIn
