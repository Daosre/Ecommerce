import { LoginProps, RegisterProps } from "@/Utils/auth-type";
import axios from "axios";
import { toast } from "react-toastify";

//Login
export async function SignIIn(authProps: LoginProps) {
	const url = `${process.env.NEXT_PUBLIC_API_URL}auth/signin`;

	const axiosConfig = {
		headers: {
			"content-type": "application/x-www-form-urlencoded;charset=utf-8",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
		},
	};
	return axios
		.post(
			url,
			{
				email: authProps.email,
				password: authProps.password,
			},
			axiosConfig,
		)
		.then((res) => {
			return res;
		})
		.catch((e) => {
			toast.error(e.response.data.message, {
				position: "top-center",
			});
			return e;
		});
}

//Register
export async function SignUUp(authProps: RegisterProps) {
	const url = `${process.env.NEXT_PUBLIC_API_URL}auth/SignUp`;

	const axiosConfig = {
		headers: {
			"content-type": "application/x-www-form-urlencoded;charset=utf-8",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
		},
	};
	return axios
		.post(
			url,
            {
                name: authProps.name,
				email: authProps.email,
				password: authProps.password
			},
			axiosConfig,
		)
		.then((res) => {
			return res;
		})
		.catch((e) => {
			toast.error(e.response.data.message, {
				position: "top-right",
			});
			return e;
		});
}

//Avoir tout les Users
export async function GetAllUser() {
	const url = `${process.env.NEXT_PUBLIC_API_URL}auth/all`;

	const axiosConfig = {
		headers: {
			"content-type": "application/x-www-form-urlencoded;charset=utf-8",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
			Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
		},
	};
	return axios
		.get(
			url,
			axiosConfig,
		)
		.then((res) => {
			return res;
		})
		.catch((e) => {
			toast.error(e.response.data.message, {
				position: "top-center",
			});
			return e;
		});
}

//Delete un User
export async function DeleteUser(id: string) {
	const url = `${process.env.NEXT_PUBLIC_API_URL}auth/delete/${id}`;

	const axiosConfig = {
		headers: {
			"content-type": "application/x-www-form-urlencoded;charset=utf-8",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
			Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
		},
	};
	return axios
		.delete(
			url,
			axiosConfig,
		)
		.then((res) => {
			return toast.success(res.data.message)
		})
		.catch((e) => {
			toast.error(e.response.data.message, {
				position: "top-center",
			});
			return e;
		});
}


	