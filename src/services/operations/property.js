import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { propertyEndpoints } from "../apis";
import { setLoading, setProperty } from "../../slices/profileSlice";
const { ADD_PROPERTY_API, UPDATE_PROPERTY_API, GET_USER_PROPERTY_API } = propertyEndpoints;

export const addProperty = async (data, token) => {
    // const toastId = toast.loading("Adding property...");
    let result = null;
    try {
        const response = await apiConnector("POST", ADD_PROPERTY_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        // toast.success("Property added successfully");
        result = response.data;
    } catch (error) {
        // toast.error(error.message);
    }
    // toast.dismiss(toastId);
    return result;
};

export const updateProperty = async (data, token) => {
    // const toastId = toast.loading("Updating property...");
    let result = null;
    try {
        const response = await apiConnector("PUT", UPDATE_PROPERTY_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        // toast.success("Property updated successfully");
        result = response.data;
    } catch (error) {
        // toast.error(error.message);
    }
    // toast.dismiss(toastId);
    return result;
};
export const getUserProperty = (token) => {
    return async (dispatch) => {
        // const toastId = toast.loading("Retrieving education records...");
        dispatch(setLoading(true));
        try {
            const response = await apiConnector("GET", GET_USER_PROPERTY_API, null, {
                Authorization: `Bearer ${token}`,
            });
            console.log("GET_USER_PROPERTY_API RESPONSE............", response);
            // if(!response.data.success){
            //     throw new Error(response.data.message)
            // }
            const propertyData = response.data.data;

            if (propertyData && Object.keys(propertyData).length > 0) {
                dispatch(setProperty(propertyData))
                // toast.success("propertyData records fetched successfully")
            }
            else {
                // toast.error("No propertyData records found")
                console.log("No propertyData records found")
            }
            dispatch(setLoading(false))
            // toast.dismiss(toastId)
            return propertyData;
        } catch (error) {
            console.log("GET_USER_PROPERTY_API ERROR............", error);
            dispatch(setLoading(false));

            if (error.response && error.response.status === 404) {
                // Handle 404 error (resource not found)
                // toast.info("No propertyData data available");
            } else {
                // Handle other errors
                // toast.error("Could Not Get User propertyData");
            }

            // toast.dismiss(toastId);
            return null; // Return null to indicate no data was retrieved
        }
    }
}