import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { profileEndpoints } from "../apis";

const {
    ADD_PROFILE_API,
    UPDATE_PROFILE_API,
    DELETE_PROFILE_API,
    GET_PROFILE_BY_ID_API,
    ADD_RECOMMENDED_PROFILE_API,
    REMOVE_RECOMMENDED_PROFILE_API,
} = profileEndpoints;

export const addProfile = async (data, token) => {
    const toastId = toast.loading("Adding profile...");
    let result = null;
    try {
        const response = await apiConnector("POST", ADD_PROFILE_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Profile added successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};

export const updateProfile = async (data, token) => {
    const toastId = toast.loading("Updating profile...");
    let result = null;
    try {
        const response = await apiConnector("POST", UPDATE_PROFILE_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Profile updated successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};

export const deleteProfile = async (data, token) => {
    const toastId = toast.loading("Deleting profile...");
    let result = null;
    try {
        const response = await apiConnector("POST", DELETE_PROFILE_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Profile deleted successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};

export const getProfileById = async (profileId, token) => {
    const toastId = toast.loading("Fetching profile...");
    let result = null;
    try {
        const response = await apiConnector("POST", GET_PROFILE_BY_ID_API, { profileId }, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        result = response.data.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};

export const addRecommendedProfile = async (data, token) => {
    const toastId = toast.loading("Adding recommended profile...");
    let result = null;
    try {
        const response = await apiConnector("POST", ADD_RECOMMENDED_PROFILE_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Recommended profile added successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};

export const removeRecommendedProfile = async (data, token) => {
    const toastId = toast.loading("Removing recommended profile...");
    let result = null;
    try {
        const response = await apiConnector("POST", REMOVE_RECOMMENDED_PROFILE_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Recommended profile removed successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};
