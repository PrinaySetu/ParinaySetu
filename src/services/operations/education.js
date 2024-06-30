import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { educationEndpoitns } from "../apis";
import { setLoading, setUserEducation } from "../../slices/profileSlice"
import { logout } from "./authAPi"
const { CREATE_EDUCATION_API, UPDATE_EDUCATION_API, GET_USER_EDUCATION_API } = educationEndpoitns;

export const createEducation = async (data, token) => {
    const toastId = toast.loading("Creating education record...");
    let result = null;
    try {
        const response = await apiConnector("POST", CREATE_EDUCATION_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Education record created successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};

export const updateEducation = async (data, token) => {
    const toastId = toast.loading("Updating education record...");
    let result = null;
    try {
        const response = await apiConnector("PUT", UPDATE_EDUCATION_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Education record updated successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};

export const getUserEducation = (token) => {
    return async (dispatch) => {
        const toastId = toast.loading("Retrieving education records...");
        dispatch(setLoading(true));
        try {
            const response = await apiConnector("GET", GET_USER_EDUCATION_API, null, {
                Authorization: `Bearer ${token}`,
            });
            console.log("GET_USER_EDUCATION_API RESPONSE............", response);
            // if (!response.data.success) {
            //     throw new Error(response.data.message);
            // }
            const educationData = response.data.data;

            if (educationData && Object.keys(educationData).length > 0) {
                dispatch(setUserEducation(educationData));
                toast.success("Education records fetched successfully");
            }
            else {
                console.log("No education records found");
                toast.info("No education records found");
            }
            dispatch(setLoading(false));
            toast.dismiss(toastId);
            return educationData;
        } catch (error) {
            console.log("GET_USER_EDUCATION_API ERROR............", error);
            dispatch(setLoading(false));

            if (error.response && error.response.status === 404) {
                // Handle 404 error (resource not found)
                toast.info("No education data available");
            } else {
                // Handle other errors
                toast.error("Could Not Get User education");
            }

            toast.dismiss(toastId);
            return null; // Return null to indicate no data was retrieved
        }
    }
}

