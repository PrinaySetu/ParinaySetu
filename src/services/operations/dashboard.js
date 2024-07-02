import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { dashboardEndpoints } from "../apis";
import { setLoading, setUserDashboard,setMainUserDashboard,setUsers,setError } from "../../slices/profileSlice"
import { logout } from "./authAPi"
const { GET_ALL_USERS_API,GET_MAIN_USER_API ,GET_ALL_OTHER_USERS_API} = dashboardEndpoints;

export const getAllUsers = (token) => {
    return async (dispatch) => {
        const toastId = toast.loading("Retrieving users...");
        dispatch(setLoading(true));
        try {
            const response = await apiConnector("GET", GET_ALL_USERS_API, null, {
                Authorization: `Bearer ${token}`,
            });
            console.log("GET_ALL_USERS_API RESPONSE............", response);

            if (!response.data.success) {
                throw new Error(response.data.message);
            }

            const usersData = response.data.data;
            dispatch(setUserDashboard(usersData));
        } catch (error) {
            toast.error(error.message);
            if (error.message === "Request failed with status code 401") {
                dispatch(logout());
            }
        }
        toast.dismiss(toastId);
        dispatch(setLoading(false));
    };
};

export const getMainUser = (token, id) => {
    return async (dispatch) => {
        const toastId = toast.loading("Retrieving user...");
        dispatch(setLoading(true));
        try {
            const response = await apiConnector("GET", `${GET_MAIN_USER_API}/${id}`, null, {
                Authorization: `Bearer ${token}`,
            });
            console.log("GET_MAIN_USER_API RESPONSE............", response);

            // if (!response.data.success) {
            //     throw new Error(response.data.message);
            // }

            const userData = response.data.user;
             // Ensure this matches your API response structure
            //  console.log("userData",userData)
            dispatch(setMainUserDashboard(userData));
        } catch (error) {
            toast.error(error.message);
            if (error.message === "Request failed with status code 401") {
                dispatch(logout());
            }
        }
        toast.dismiss(toastId);
        dispatch(setLoading(false));
    };
};
export const getAllOtherUsers = (token, data) => {
    return async (dispatch) => {
      dispatch(setLoading(true));
      try {
        const response = await apiConnector("GET", GET_ALL_OTHER_USERS_API, data, {
          Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
          throw new Error(response.data.message);
        }
        dispatch(setUsers(response.data.users));
      } catch (error) {
        console.error("Error fetching other users", error);
        dispatch(setError(error.message));
      } finally {
        dispatch(setLoading(false));
      }
    };
  };
