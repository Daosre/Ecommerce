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