import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { motherFamilyEndpoints } from "../apis";
import { setUserMotherFamily , setLoading} from "../../slices/profileSlice";
const {
    ADD_MOTHER_FAMILY_API,
    UPDATE_MOTHER_FAMILY_API,
    GET_USER_MOTHER_FAMILY_API
} = motherFamilyEndpoints;

export const addMotherFamily = async (data, token) => {
    const toastId = toast.loading("Adding mother's family details...");
    let result = null;
    try {
        const response = await apiConnector("POST", ADD_MOTHER_FAMILY_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Mother's family details added successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
}
export const updateMotherFamily = async (data, token) => {
    const toastId = toast.loading("Updating mother's family details...");
    let result = null;
    try {
        const response = await apiConnector("PUT", UPDATE_MOTHER_FAMILY_API, data, {
            Authorization: `Bearer ${token}`,
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Mother's family details updated successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
}
export const getUserMotherFamily = (token) => {
    const thunk = async (dispatch) => {
        const toastId = toast.loading("Fetching father's family details...");
        let result = null;
        try {
          const response = await apiConnector("GET", GET_USER_MOTHER_FAMILY_API, null, {
            Authorization: `Bearer ${token}`,
          });
          toast.success("Mother's family details fetched successfully");
          result = response.data.data;
          console.log("Get User MOther Family", result);
          if (result && Object.keys(result).length > 0) {
            dispatch(setUserMotherFamily(result));
          } else {
            toast.error("No Mother's family details found");
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