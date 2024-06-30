import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { familyDetailsEndpoints } from "../apis";
import { setUserFamilyDetails } from "../../slices/profileSlice";
const {
    ADD_FAMILY_DETAILS_API,
    UPDATE_FAMILY_DETAILS_API,
    UPDATE_BROTHER_API,
    UPDATE_SISTER_API,
    REMOVE_SIBLING_API,
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

export const updateBrother = async (data, token) => {
    const toastId = toast.loading("Updating brother details...");
    let result = null;
    try {
        const response = await apiConnector("PUT", UPDATE_BROTHER_API, data, {
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
        const response = await apiConnector("PUT", UPDATE_SISTER_API, data, {
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
        const response = await apiConnector("PUT", REMOVE_SIBLING_API, data, {
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