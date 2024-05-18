import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { friendsEndpoints } from "../apis";

const { ADD_FRIEND_API, UPDATE_FRIEND_API, DELETE_FRIEND_API } = friendsEndpoints;

export const addFriend = async (data, token) => {
    const toastId = toast.loading("Adding friend...");
    let result = null;
    try {
        const response = await apiConnector("POST", ADD_FRIEND_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Friend added successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};

export const updateFriend = async (data, token) => {
    const toastId = toast.loading("Updating friend...");
    let result = null;
    try {
        const response = await apiConnector("PUT", UPDATE_FRIEND_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Friend updated successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};

export const deleteFriend = async (data, token) => {
    const toastId = toast.loading("Deleting friend...");
    let result = null;
    try {
        const response = await apiConnector("DELETE", DELETE_FRIEND_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Friend deleted successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};
