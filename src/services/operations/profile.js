import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { profileEndpoints } from "../apis";

import { setLoading, setUser, setRecommendedProfiles } from "../../slices/profileSlice"
import { logout } from "./authAPi"
const {
    ADD_PROFILE_API,
    UPDATE_PROFILE_API,
    DELETE_PROFILE_API,
    GET_PROFILE_BY_ID_API,
    ADD_RECOMMENDED_PROFILE_API,
    REMOVE_RECOMMENDED_PROFILE_API,
    GET_USER_DETAILS_API,
    GET_USER_ADDITIONAL_DETAILS_API,
    UPDATE_RECOMMENDED_PROFILES_API,
    SHOW_ALL_RECOMMENDED_PROFILES_API,
    GET_SINGLE_RECOMMENDED_PROFILE_API
} = profileEndpoints;

export const addProfile = async (data, token) => {
    // const toastId = toast.loading("Adding profile...");
    let result = null;
    try {
        const response = await apiConnector("POST", ADD_PROFILE_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        // toast.success("Profile added successfully");
        result = response.data;
    } catch (error) {
        // toast.error(error.message);
    }
    // toast.dismiss(toastId);
    return result;
};

export const updateProfile = async (data, token) => {
    // const toastId = toast.loading("Updating profile...");
    let result = null;
    try {
        const response = await apiConnector("PUT", UPDATE_PROFILE_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        // toast.success("Profile updated successfully");
        result = response.data;
    } catch (error) {
        // toast.error(error.message);
    }
    // toast.dismiss(toastId);
    return result;
};

export const deleteProfile = async (data, token) => {
    // const toastId = toast.loading("Deleting profile...");
    let result = null;
    try {
        const response = await apiConnector("DELETE", DELETE_PROFILE_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        // toast.success("Profile deleted successfully");
        result = response.data;
    } catch (error) {
        // toast.error(error.message);
    }
    // toast.dismiss(toastId);
    return result;
};

export const getProfileById = async (profileId, token) => {
    // const toastId = toast.loading("Fetching profile...");
    let result = null;
    try {
        const response = await apiConnector("GET", GET_PROFILE_BY_ID_API, { profileId }, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        result = response.data.data;
    } catch (error) {
        // toast.error(error.message);
    }
    // toast.dismiss(toastId);
    return result;
};

export const addRecommendedProfile = async (data, token) => {
    // const toastId = toast.loading("Adding recommended profile...");
    let result = null;
    try {
        const response = await apiConnector("POST", ADD_RECOMMENDED_PROFILE_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        // toast.success("Recommended profile added successfully");
        result = response.data;
    } catch (error) {
        // toast.error(error.message);
    }
    // toast.dismiss(toastId);
    return result;
};
export const updateRecommendedProfiles = async (data, token) => {
    // const toastId = toast.loading("Updating recommended profiles...");
    let result = null;
    try {
        const response = await apiConnector("POST", UPDATE_RECOMMENDED_PROFILES_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        // toast.success("Recommended profiles updated successfully");
        result = response.data;
    } catch (error) {
        // toast.error(error.message);
    }
    // toast.dismiss(toastId);
    return result;

}

export const removeRecommendedProfile = async (data, token) => {
    // const toastId = toast.loading("Removing recommended profile...");
    let result = null;
    try {
        const response = await apiConnector("DELETE", REMOVE_RECOMMENDED_PROFILE_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        // toast.success("Recommended profile removed successfully");
        result = response.data;
    } catch (error) {
        // toast.error(error.message);
    }
    // toast.dismiss(toastId);
    return result;
};
export const getUserDetails = (token) => {
    return async (dispatch) => {
        // const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));
        try {
            const response = await apiConnector("GET", GET_USER_DETAILS_API, null, {
                Authorization: `Bearer ${token}`,
            });
            console.log("GET_USER_DETAILS API RESPONSE............", response);

            // if (!response.data.success) {
            //     throw new Error(response.data.message);
            // }

            const userData = response.data.data;

            dispatch(setUser(userData));
        } catch (error) {
            console.log("GET_USER_DETAILS API ERROR............", error);
            // dispatch(logout());
            // toast.error("Could Not Get User Details");
        }
        dispatch(setLoading(false));
        // toast.dismiss(toastId);
    };
};

export const getUserAdditionalDetails = (token) => {
    return async (dispatch) => {
        // const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));
        try {
            const response = await apiConnector("GET", GET_USER_ADDITIONAL_DETAILS_API, null, {
                Authorization: `Bearer ${token}`,
            });
            console.log("GET_USER_ADDITIONAL_DETAILS API RESPONSE............", response);

            if (!response.data.success) {
                throw new Error(response.data.message);
            }

            const userData = response.data.data;

            dispatch(setUser(userData));
            dispatch(setLoading(false));
            // toast.dismiss(toastId);
            return userData; // Return the user data for further use
        } catch (error) {
            console.log("GET_USER_ADDITIONAL_DETAILS API ERROR............", error);
            // dispatch(logout());
            // toast.error("Could Not Get User Additional Details");
        }
    };
};

export const showAllRecommendedProfiles = async (token) => {
    // const toastId = toast.loading("Fetching recommended profiles...");
    let result = null;
    try {
        const response = await apiConnector("GET", SHOW_ALL_RECOMMENDED_PROFILES_API, null, {
            Authorization: `Bearer ${token}`,
        });
        // if (!response.data.success) {
        //     throw new Error(response.data.message);
        // }
        result = response.data.data;
    } catch (error) {
        // toast.error(error.message);
    }
    // toast.dismiss(toastId);
    return result;
}

export const getSingleRecommendedProfile = async (token, data) => {
    // const toastId = toast.loading("Fetching recommended profile...");
    console.log("DATA", data)
    let result = null;
    try {
        const response = await apiConnector("POST", GET_SINGLE_RECOMMENDED_PROFILE_API, data, {
            Authorization: `Bearer ${token}`,
        });
        // if (!response.data.success) {
        //     throw new Error(response.data.message);
        // }
        result = response.data.data;
    } catch (error) {
        // toast.error(error.message);
    }
    // toast.dismiss(toastId);
    return result;
}
export const uploadProfilePicture = async (data, token) => {
    // const toastId = toast.loading("Uploading profile picture...");
    let result = null;
    try {
        const response = await apiConnector("POST", profileEndpoints.UPLOAD_PROFILE_PICTURE_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        // toast.success("Profile picture uploaded successfully");
        result = response.data;
    } catch (error) {
        // toast.error(error.message);
    }
    // toast.dismiss(toastId);
    return result;
};