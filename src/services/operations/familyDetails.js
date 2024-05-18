import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { familyDetailsEndpoints } from "../apis";

const {
    ADD_FAMILY_DETAILS_API,
    UPDATE_FAMILY_DETAILS_API,
    UPDATE_BROTHER_API,
    UPDATE_SISTER_API,
    REMOVE_SIBLING_API,
} = familyDetailsEndpoints;

export const addFamilyDetails = async (data, token) => {
    const toastId = toast.loading("Adding family details...");
    let result = null;
    try {
        const response = await apiConnector("POST", ADD_FAMILY_DETAILS_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Family details added successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};

export const updateFamilyDetails = async (data, token) => {
    const toastId = toast.loading("Updating family details...");
    let result = null;
    try {
        const response = await apiConnector("POST", UPDATE_FAMILY_DETAILS_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Family details updated successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};

export const updateBrother = async (data, token) => {
    const toastId = toast.loading("Updating brother details...");
    let result = null;
    try {
        const response = await apiConnector("POST", UPDATE_BROTHER_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Brother details updated successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};

export const updateSister = async (data, token) => {
    const toastId = toast.loading("Updating sister details...");
    let result = null;
    try {
        const response = await apiConnector("POST", UPDATE_SISTER_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Sister details updated successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};

export const removeSibling = async (data, token) => {
    const toastId = toast.loading("Removing sibling...");
    let result = null;
    try {
        const response = await apiConnector("POST", REMOVE_SIBLING_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Sibling removed successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};
