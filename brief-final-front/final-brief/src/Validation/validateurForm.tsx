import * as yup from "yup";

export const schema = yup.object({
	name: yup.string().required("Required field"),
	email: yup.string().email("Email valid").required(),
	password: yup
		.string()
		.matches(/[a-z]/, "You need one letter")
		.matches(/[A-Z]/, "You need one capital letter ")
		.matches(/[1-9]/, "You need one number")
		.matches(/[@!?]/, "You need one special character")
		.min(8, "Minimum 8 ")
		.required("Required field")
		.required("Required field"),
});

export const CreateCategoryy = yup.object({
	name: yup.string().required("Required field")
		.matches(/[a-z]/, "You need one letter")
		.min(4, "Minimum 4 ")
});

export const CreateProduct = yup.object({
	name: yup.string().required("Required field")
		.matches(/[a-z]/, "You need one letter")
		.min(4, "Minimum 4 "),
	description: yup.string().required("Required Field")
		.matches(/[a-z]/, 'You need one letter')
		.min(4, "Minimum 4"),
	image: yup.string().required("Required Field"),
	price: yup.number()
	.min(1, "Minimum 1 ")
	.required("Required field"),
	quantity: yup.number().required('Required Field')
		.min(1, "Minimum 1"),
	categoryId: yup.string().required("Met ta mere")
});


