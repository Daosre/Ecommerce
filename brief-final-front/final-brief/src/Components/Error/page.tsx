import React from "react";

//
export const ErrorMsg = (errorName: { error: string }) => {
	return <p className="text-red-500 h-3 text-lg italic">{errorName.error} is required</p>;
};
