'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
import { IoLogOutOutline } from 'react-icons/io5';
import { Zoom, toast } from 'react-toastify';

const LogOut = () => {
  const { push } = useRouter();
	function Logout() {
		toast.info("Disconnected", {
			autoClose: 1000,
      theme: "dark",
      position: 'top-center',
			transition: Zoom,
		});
		setTimeout(() => {
			window.localStorage.clear();
			push("/");
		}, 1500);
	}
  return (
    <div className=''>
      <IoLogOutOutline
				className="cursor-pointer p-2 duration-700 rounded-lg absolute bottom-0 left-0 w-10"
				size={50}
				color="black"
				onClick={() => {
					Logout();
				}}
			/>
    </div>
  )
}

export default LogOut
