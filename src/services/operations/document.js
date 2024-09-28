import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { documentEndpoints } from "../apis";

const { UPLOAD_DOCUMENT_API, UPDATE_DOCUMENT_API } = documentEndpoints;

export const uploadDocument = async (data, token) => {
    // const toastId = toast.loading("Uploading document...");
    let result = null;
    try {
        const response = await apiConnector("POST", UPLOAD_DOCUMENT_API, data, {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        // toast.success("Document uploaded successfully");
        result = response.data;
    } catch (error) {
        // toast.error(error.message);
    }
    // toast.dismiss(toastId);
    return result;
};

export const updateDocument = async (data, token) => {
    // const toastId = toast.loading("Updating document...");
    let result = null;
    try {
        const response = await apiConnector("PUT", UPDATE_DOCUMENT_API, data, {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
        });
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        // toast.success("Document updated successfully");
        result = response.data;
    } catch (error) {
        // toast.error(error.message);
    }
    // toast.dismiss(toastId);
    return result;
};
