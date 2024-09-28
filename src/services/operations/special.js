import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { specialEndpoints } from "../apis";
import { setLoading, setSpecial } from "../../slices/profileSlice";
const { ADD_SPECIAL_API, UPDATE_SPECIAL_API, DELETE_SPECIAL_API, GET_USER_SPECIAL_API } = specialEndpoints;

export const addSpecial = async (data, token) => {
    // const toastId = toast.loading("Adding special relation...");
    let result = null;
    try {
        const response = await apiConnector("POST", ADD_SPECIAL_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        // toast.success("Special relation added successfully");
        result = response.data;
    } catch (error) {
        // toast.error(error.message);
    }
    // toast.dismiss(toastId);
    return result;
};

export const updateSpecial = async (data, token) => {
    // const toastId = toast.loading("Updating special relation...");
    let result = null;
    try {
        const response = await apiConnector("PUT", UPDATE_SPECIAL_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        // toast.success("Special relation updated successfully");
        result = response.data;
    } catch (error) {
        // toast.error(error.message);
    }
    // toast.dismiss(toastId);
    return result;
};

export const deleteSpecial = async (data, token) => {
    // const toastId = toast.loading("Deleting special relation...");
    let result = null;
    try {
        const response = await apiConnector("DELETE", DELETE_SPECIAL_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        // toast.success("Special relation deleted successfully");
        result = response.data;
    } catch (error) {
        // toast.error(error.message);
    }
    // toast.dismiss(toastId);
    return result;
};
export const getUserSpecial = (token) => {
    return async (dispatch) => {
        // const toastId = toast.loading("Retrieving special records...");
        dispatch(setLoading(true));
        try {
            const response = await apiConnector("GET", GET_USER_SPECIAL_API, null, {
                Authorization: `Bearer ${token}`,
            });
            console.log("GET_USER_SPECIAL_API RESPONSE............", response);
            // if(!response.data.success){
            //     throw new Error(response.data.message)
            // }
            const specialData = response.data.data;

            if (specialData && Object.keys(specialData).length > 0) {
                dispatch(setSpecial(specialData))
                // toast.success("specialData records fetched successfully")
            }
            else {
                // toast.error("No specialData records found")
                console.log("No specialData records found")
            }
            dispatch(setLoading(false))
            // toast.dismiss(toastId)
            return specialData;
        } catch (error) {
            console.log("GET_USER_SPECIAL_API ERROR............", error);
            dispatch(setLoading(false));

            if (error.response && error.response.status === 404) {
                // Handle 404 error (resource not found)
                // toast.info("No specialData data available");
            } else {
                // Handle other errors
                // toast.error("Could Not Get User specialData");
            }

            // toast.dismiss(toastId);
            return null; // Return null to indicate no data was retrieved
        }
    }
}