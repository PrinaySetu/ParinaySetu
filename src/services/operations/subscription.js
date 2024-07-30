import { apiConnector } from '../apiConnector'; // Import your apiConnector function
import { toast } from 'react-hot-toast'; // Import toast for notifications

import { subscriptionEndpoints } from "../apis";
const{GET_PLANS_API, CREATE_SUBSCRIPTION_API, HANDLE_CALLBACK_API, GET_CURRENT_SUBSCRIPTION_API} = subscriptionEndpoints;
// Function to get all subscription plans
export const getSubscriptionPlans = async () => {
    const toastId = toast.loading("Fetching subscription plans...");
    let result = null;
    try {
        const response = await apiConnector('GET', GET_PLANS_API);
        if (!response) {
            throw new Error('Failed to fetch subscription plans.');
        }
        toast.success("Subscription plans fetched successfully");
        result = response;
    } catch (error) {
        toast.error(error.message || 'An error occurred while fetching subscription plans');
    }
    toast.dismiss(toastId);
    return result;
};

export const createSubscription = async (planId, token) => {
    const toastId = toast.loading("Creating subscription...");
    try {
        const response = await apiConnector('POST', CREATE_SUBSCRIPTION_API, { planId }, {
            Authorization: `Bearer ${token}`
        });

        // console.log("Raw API response:", response);

        if (!response || !response.data) {
            throw new Error('Invalid response from server');
        }

        if (!response.data.orderId || !response.data.amount) {
            throw new Error('Missing orderId or amount in server response');
        }

        toast.success("Subscription created successfully");
        return response.data;
    } catch (error) {
        console.error('Error creating subscription:', error);
        toast.error(error.message || 'An error occurred while creating subscription');
        throw error; // Re-throw the error instead of returning null
    } finally {
        toast.dismiss(toastId);
    }
};

export const handlePaymentCallback = async (token, paymentData) => {
    const toastId = toast.loading("Verifying payment...");
    console.log('Payment data:', paymentData);
    try {
        const response = await apiConnector('POST', HANDLE_CALLBACK_API, paymentData, {
            Authorization: `Bearer ${token}`,
        });
        // console.log('Callback response:', response);
        if (!response || response.error) {
            throw new Error(response.error || 'Payment verification failed.');
        }
        toast.success("Payment verified successfully");
        return response;
    } catch (error) {
        console.error('Callback error:', error);
        toast.error(error.message || 'An error occurred while verifying payment');
        throw error;
    } finally {
        toast.dismiss(toastId);
    }
};

// Function to get current user's subscription
export const getCurrentSubscription = async (token) => {
    console.log('Fetching current subscription...');
    const toastId = toast.loading("Fetching current subscription...");
    let result = null;
    try {
        const response = await apiConnector('PUT', GET_CURRENT_SUBSCRIPTION_API, null, {
            Authorization: `Bearer ${token}`
        });

        if (response.status !== 200) {
            throw new Error(response.data.error || 'Failed to fetch current subscription.');
        }

        toast.success("Current subscription fetched successfully");
        result = response.data;
    } catch (error) {
        toast.error(error.message || 'An error occurred while fetching the current subscription');
    } finally {
        toast.dismiss(toastId);
    }

    return result;
};
