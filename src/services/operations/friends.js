import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { friendsEndpoints } from "../apis";
import { setLoading,setuserFriends } from "../../slices/profileSlice";
const { ADD_FRIEND_API, UPDATE_FRIEND_API, GET_USER_FRIENDS_API } = friendsEndpoints;

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

export const getUserFriends = (token) => {
    return async (dispatch) => {
        const toastId = toast.loading("Retrieving friends records...");
        dispatch(setLoading(true));
        try {
            const response = await apiConnector("GET", GET_USER_FRIENDS_API, null, {
                Authorization: `Bearer ${token}`,
            });
            console.log("GET_USER_FRIENDS RESPONSE............", response);
            // if(!response.data.success){
            //     throw new Error(response.data.message)
            // }
            const friendsData = response.data.data;

            if(friendsData&& Object.keys(friendsData).length>0){
                dispatch(setuserFriends(friendsData))
                toast.success("friendsData records fetched successfully")
            }
            else{
                toast.error("No friendsData records found")
                console.log("No friendsData records found")
            }
            dispatch(setLoading(false))
            toast.dismiss(toastId)
            return friendsData;
        } catch (error) {
            console.log("GET_USER_FRIENDS_API  ERROR............", error);
            dispatch(setLoading(false));
            
            if (error.response && error.response.status === 404) {
                // Handle 404 error (resource not found)
                toast.info("No friendsData data available");
            } else {
                // Handle other errors
                toast.error("Could Not Get User friendsData");
            }

            toast.dismiss(toastId);
            return null; // Return null to indicate no data was retrieved
        }
        }
    }