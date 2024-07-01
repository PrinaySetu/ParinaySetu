import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { relativeEndpoints } from "../apis";
import { setLoading, setUserRelative } from "../../slices/profileSlice";
const { ADD_RELATIVE_API, UPDATE_RELATIVE_API, DELETE_RELATIVE_API ,GET_USER_RELATIVE_API} = relativeEndpoints;

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
        const response = await apiConnector("PUT", UPDATE_RELATIVE_API, data, {
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
        const response = await apiConnector("DELETE", DELETE_RELATIVE_API, data, {
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
export const getUserRelative= (token) => {
    return async (dispatch) => {
        const toastId = toast.loading("Retrieving GET_USER_RELATIVE_API records...");
        dispatch(setLoading(true));
        try {
            const response = await apiConnector("GET", GET_USER_RELATIVE_API, null, {
                Authorization: `Bearer ${token}`,
            });
            console.log("GET_USER_RELATIVE_API RESPONSE............", response);
            // if(!response.data.success){
            //     throw new Error(response.data.message)
            // }
            const relativeData = response.data.data;

            if(relativeData&& Object.keys(relativeData).length>0){
                dispatch(setUserRelative(relativeData))
                toast.success("relativeData records fetched successfully")
            }
            else{
                toast.error("No relativeData records found")
                console.log("No relativeData records found")
            }
            dispatch(setLoading(false))
            toast.dismiss(toastId)
            return relativeData;
        } catch (error) {
            console.log("GET_USER_RELATIVE_API ERROR............", error);
            dispatch(setLoading(false));
            
            if (error.response && error.response.status === 404) {
                // Handle 404 error (resource not found)
                toast.info("No relativeData data available");
            } else {
                // Handle other errors
                toast.error("Could Not Get User relativeData");
            }

            toast.dismiss(toastId);
            return null; // Return null to indicate no data was retrieved
        }
        }
    }