import { AddProductProps } from "@/Utils/product-type";
import axios from "axios";
import { toast } from "react-toastify";

//Rajouter un produit
export async function AddProduct(Productprops: AddProductProps) {
	const url = `${process.env.NEXT_PUBLIC_API_URL}product/new`;

	const axiosConfig = {
		headers: {
			"content-type": "application/json;charset=utf-8",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
			Authorization: `Bearer ${window.localStorage.getItem("role")}`
		},
	};
	return axios
		.post(
			url,
			{
                name: Productprops.name,
                description: Productprops.description,
                image: Productprops.image,
                price: Number(Productprops.price),
								quantity: Number(Productprops.quantity),
								category: Productprops.categoryId
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

//Avoir tout produit
export async function GetAllProduct() {
	const url = `${process.env.NEXT_PUBLIC_API_URL}product/all`;

	const axiosConfig = {
		headers: {
			"content-type": "application/x-www-form-urlencoded;charset=utf-8",
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
				position: "top-right",
			});
			return e;
		});
}

//Recherche
export async function SearchProduct(product: string | undefined) {
	if (!product) {
		return GetAllProduct()
	}
	const url = `${process.env.NEXT_PUBLIC_API_URL}product/search/${product}`;
	const axiosConfig = {
		headers: {
			"content-type": "application/x-www-form-urlencoded;charset=utf-8",
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
				position: "top-right",
			});
			return e;
		});
}