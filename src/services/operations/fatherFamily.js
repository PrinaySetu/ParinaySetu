import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { fatherFamilyEndpoints } from "../apis";
import { setLoading,setUserFatherFamily } from "../../slices/profileSlice";

const {
    ADD_FATHER_FAMILY_API,
    UPDATE_FATHER_FAMILY_API,
    UPDATE_TAU_API,
    UPDATE_BUA_API,
    GET_USER_FATHER_FAMILY_API
} = fatherFamilyEndpoints;

export const addFatherFamily = async (data, token) => {
    const toastId = toast.loading("Adding father's family details...");
    let result = null;
    try {
        const response = await apiConnector("POST", ADD_FATHER_FAMILY_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Father's family details added successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};

export const updateFatherFamily = async (data, token) => {
    const toastId = toast.loading("Updating father's family details...");
    let result = null;
    try {
        const response = await apiConnector("PUT", UPDATE_FATHER_FAMILY_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Father's family details updated successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};

export const updateTau = async (data, token) => {
    const toastId = toast.loading("Updating Tau details...");
    let result = null;
    try {
        const response = await apiConnector("POST", UPDATE_TAU_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Tau details updated successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};

export const updateBua = async (data, token) => {
    const toastId = toast.loading("Updating Bua details...");
    let result = null;
    try {
        const response = await apiConnector("PUT", UPDATE_BUA_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Bua details updated successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
};

export const getUserFatherFamily = (token) => {
    const thunk = async (dispatch) => {
      const toastId = toast.loading("Fetching father's family details...");
      let result = null;
      try {
        const response = await apiConnector("GET", GET_USER_FATHER_FAMILY_API, null, {
          Authorization: `Bearer ${token}`,
        });
        toast.success("Father's family details fetched successfully");
        result = response.data.data;
        console.log("Get User Father Family", result);
        if (result && Object.keys(result).length > 0) {
          dispatch(setUserFatherFamily(result));
        } else {
          toast.error("No father's family details found");
        }
        toast.dismiss(toastId);
        return result;
      } catch (error) {
        toast.error(error.message);
      }
    };
  
    // This allows the function to be used both as a thunk and directly
    thunk.direct = () => thunk(() => {});
  
    return thunk;
  };