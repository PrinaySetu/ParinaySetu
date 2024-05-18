import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { workingEndpoints } from "../apis";

const { ADD_WORKING_API, UPDATE_WORKING_API, DELETE_WORKING_API } = workingEndpoints;

export const addWorking = async (data, token) => {
    const toastId = toast.loading("Adding working details...");
    let result = null;
    try {
        const response = await apiConnector("POST", ADD_WORKING_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Working details added successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};

export const updateWorking = async (data, token) => {
    const toastId = toast.loading("Updating working details...");
    let result = null;
    try {
        const response = await apiConnector("POST", UPDATE_WORKING_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Working details updated successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};

export const deleteWorking = async (data, token) => {
    const toastId = toast.loading("Deleting working details...");
    let result = null;
    try {
        const response = await apiConnector("POST", DELETE_WORKING_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Working details deleted successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};
