import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { fatherFamilyEndpoints } from "../apis";

const {
    ADD_FATHER_FAMILY_API,
    UPDATE_FATHER_FAMILY_API,
    UPDATE_TAU_API,
    UPDATE_BUA_API,
} = fatherFamilyEndpoints;

export const addFatherFamily = async (data, token) => {
    const toastId = toast.loading("Adding father's family details...");
    let result = null;
    try {
        const response = await apiConnector("POST", ADD_FATHER_FAMILY_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Father's family details added successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};

export const updateFatherFamily = async (data, token) => {
    const toastId = toast.loading("Updating father's family details...");
    let result = null;
    try {
        const response = await apiConnector("POST", UPDATE_FATHER_FAMILY_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Father's family details updated successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};

export const updateTau = async (data, token) => {
    const toastId = toast.loading("Updating Tau details...");
    let result = null;
    try {
        const response = await apiConnector("POST", UPDATE_TAU_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Tau details updated successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};

export const updateBua = async (data, token) => {
    const toastId = toast.loading("Updating Bua details...");
    let result = null;
    try {
        const response = await apiConnector("POST", UPDATE_BUA_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Bua details updated successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};
