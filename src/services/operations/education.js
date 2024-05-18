import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { educationEndpoints } from "../apis";

const { CREATE_EDUCATION_API, UPDATE_EDUCATION_API } = educationEndpoints;

export const createEducation = async (data, token) => {
    const toastId = toast.loading("Creating education record...");
    let result = null;
    try {
        const response = await apiConnector("POST", CREATE_EDUCATION_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Education record created successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};

export const updateEducation = async (data, token) => {
    const toastId = toast.loading("Updating education record...");
    let result = null;
    try {
        const response = await apiConnector("PUT", UPDATE_EDUCATION_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Education record updated successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};
