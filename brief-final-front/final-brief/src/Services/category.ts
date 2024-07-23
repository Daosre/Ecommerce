import { CategoryList, CreateCatProps } from "@/Utils/category-type";
import axios from "axios";
import { toast } from "react-toastify";

//Avoir toute les catégories
export async function GetAllCategory() {
	const url = `${process.env.NEXT_PUBLIC_API_URL}category/all`;

	const axiosConfig = {
		headers: {
			"content-type": "application/json;charset=utf-8",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
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

//Editer une catégorie
export async function EditCategory(category: CategoryList) {
	const url = `${process.env.NEXT_PUBLIC_API_URL}category/update/${category}`;

	const axiosConfig = {
		headers: {
			"content-type": "application/x-www-form-urlencoded;charset=utf-8",
			"Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
        },
	};
	return axios
		.patch(
            url,
            {
                name: category.name
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

//Crée une catégorie
export async function DeleteCategory(id: CategoryList) {
	const url = `${process.env.NEXT_PUBLIC_API_URL}category/delete/${id}`;

	const axiosConfig = {
		headers: {
			"content-type": "application/json;charset=utf-8",
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

//Editer une catégorie
export async function CreateCategoory(name: CreateCatProps) {
	const url = `${process.env.NEXT_PUBLIC_API_URL}category/new`;

	const axiosConfig = {
		headers: {
			"content-type": "application/json;charset=utf-8",
			"Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
        },
	};
	return axios
		.post(
            url,
            {
                name: name.name
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