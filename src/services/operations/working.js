import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { workingEndpoints } from "../apis";
import { setLoading, setUserWorking } from "../../slices/profileSlice"
const { ADD_WORKING_API, UPDATE_WORKING_API, DELETE_WORKING_API, GET_USER_WORKING_API } = workingEndpoints;

export const addWorking = async (data, token) => {
    // const toastId = toast.loading("Adding working details...");
    let result = null;
    try {
        const response = await apiConnector("POST", ADD_WORKING_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        // toast.success("Working details added successfully");
        result = response.data;
    } catch (error) {
        // toast.error(error.message);
    }
    // toast.dismiss(toastId);
    return result;
};

export const updateWorking = async (data, token) => {
    // const toastId = toast.loading("Updating working details...");
    let result = null;
    try {
        const response = await apiConnector("PUT", UPDATE_WORKING_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        // toast.success("Working details updated successfully");
        result = response.data;
    } catch (error) {
        // toast.error(error.message);
    }
    // toast.dismiss(toastId);
    return result;
};

export const deleteWorking = async (data, token) => {
    // const toastId = toast.loading("Deleting working details...");
    let result = null;
    try {
        const response = await apiConnector("DELETE", DELETE_WORKING_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        // toast.success("Working details deleted successfully");
        result = response.data;
    } catch (error) {
        // toast.error(error.message);
    }
    // toast.dismiss(toastId);
    return result;
};
export const getUserWorking = (token) => {
    console.log("GET_USER_WORKING_API............", GET_USER_WORKING_API);
    return async (dispatch) => {
        // const toastId = toast.loading("Retrieving working details...");
        dispatch(setLoading(true));
        try {
            const response = await apiConnector("GET", GET_USER_WORKING_API, null, {
                Authorization: `Bearer ${token}`,
            });
            console.log("GET_USER_WORKING_API RESPONSE............", response);
            // if(!response.data.success){
            //     throw new Error(response.data.message)
            // }
            const workingData = response.data.data;

            if (workingData && Object.keys(workingData).length > 0) {
                dispatch(setUserWorking(workingData));
            }
            else {
                // toast.error("No working details found");
                console.log("No working details found");
            }
            dispatch(setLoading(false));
            // toast.dismiss(toastId);
            return workingData;
            // toast.success("Working details retrieved successfully");
        } catch (error) {
            // toast.error(error.message);
        }
        // toast.dismiss(toastId);
        dispatch(setLoading(false));
    }
}