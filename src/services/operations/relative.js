import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { relativeEndpoints } from "../apis";

const { ADD_RELATIVE_API, UPDATE_RELATIVE_API, DELETE_RELATIVE_API } = relativeEndpoints;

export const addRelative = async (data, token) => {
    const toastId = toast.loading("Adding relative...");
    let result = null;
    try {
        const response = await apiConnector("POST", ADD_RELATIVE_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Relative added successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};

export const updateRelative = async (data, token) => {
    const toastId = toast.loading("Updating relative...");
    let result = null;
    try {
        const response = await apiConnector("POST", UPDATE_RELATIVE_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Relative updated successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};

export const deleteRelative = async (data, token) => {
    const toastId = toast.loading("Deleting relative...");
    let result = null;
    try {
        const response = await apiConnector("POST", DELETE_RELATIVE_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Relative deleted successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};
