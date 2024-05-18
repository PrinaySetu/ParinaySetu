import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { contactEndpoints } from "../apis";

const { CREATE_CONTACT_API, UPDATE_CONTACT_API } = contactEndpoints;

export const createContact = async (data, token) => {
    const toastId = toast.loading("Creating contact...");
    let result = null;
    try {
        const response = await apiConnector("POST", CREATE_CONTACT_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Contact created successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};

export const updateContact = async (data, token) => {
    const toastId = toast.loading("Updating contact...");
    let result = null;
    try {
        const response = await apiConnector("POST", UPDATE_CONTACT_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Contact updated successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};
