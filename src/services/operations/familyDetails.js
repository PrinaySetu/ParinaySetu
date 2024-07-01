import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { familyDetailsEndpoints } from "../apis";
import { setUserFamilyDetails } from "../../slices/profileSlice";
const {
    ADD_FAMILY_DETAILS_API,
    UPDATE_FAMILY_DETAILS_API,
    GET_USER_FAMILY_DETAILS_API
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
        const response = await apiConnector("PUT", UPDATE_FAMILY_DETAILS_API, data, {
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


export const getUserFamilyDetails = (token) => {
    return async (dispatch) => {
        const toastId = toast.loading("Retrieving family details...");
        try {
            const response = await apiConnector("GET", GET_USER_FAMILY_DETAILS_API, null, {
                Authorization: `Bearer ${token}`,
            });
            // if (!response.data.success) {
            //     throw new Error(response.data.message);
            // }
            const familyDetails = response.data.data;
            console.log("GET_USER_FAMILY_DETAILS_API RESPONSE............", response);
            if (familyDetails && Object.keys(familyDetails).length > 0) {
                dispatch(setUserFamilyDetails(familyDetails));
                toast.success("Family details fetched successfully");
            } else {
                toast.error("No family details found");
            }
            toast.dismiss(toastId);
            return familyDetails;
        } catch (error) {
            toast.error(error.message);
        }
    };
}