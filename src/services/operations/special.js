import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { specialEndpoints } from "../apis";

const { ADD_SPECIAL_API, UPDATE_SPECIAL_API, DELETE_SPECIAL_API } = specialEndpoints;

export const addSpecial = async (data, token) => {
    const toastId = toast.loading("Adding special relation...");
    let result = null;
    try {
        const response = await apiConnector("POST", ADD_SPECIAL_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Special relation added successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};

export const updateSpecial = async (data, token) => {
    const toastId = toast.loading("Updating special relation...");
    let result = null;
    try {
        const response = await apiConnector("POST", UPDATE_SPECIAL_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Special relation updated successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};

export const deleteSpecial = async (data, token) => {
    const toastId = toast.loading("Deleting special relation...");
    let result = null;
    try {
        const response = await apiConnector("POST", DELETE_SPECIAL_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Special relation deleted successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};
