import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { propertyEndpoints } from "../apis";

const { ADD_PROPERTY_API, UPDATE_PROPERTY_API } = propertyEndpoints;

export const addProperty = async (data, token) => {
    const toastId = toast.loading("Adding property...");
    let result = null;
    try {
        const response = await apiConnector("POST", ADD_PROPERTY_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Property added successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};

export const updateProperty = async (data, token) => {
    const toastId = toast.loading("Updating property...");
    let result = null;
    try {
        const response = await apiConnector("POST", UPDATE_PROPERTY_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Property updated successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};
