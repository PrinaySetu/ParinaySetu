import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { getSubscriptionPlans, createSubscription, handlePaymentCallback } from '../../services/operations/subscription'; // Ensure imports are correct
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SubscriptionComponent = () => {
    const [plans, setPlans] = useState([]);
    const token = useSelector((state) => state.auth.token);
    const navigate = useNavigate();

    useEffect(() => {
        fetchPlans();
    }, []);

    const fetchPlans = async () => {
        try {
            // console.log("Fetching plans...");
            const response = await getSubscriptionPlans();
            // console.log("Raw API response:", response);
            
            if (response && response.data && Array.isArray(response.data)) {
                // console.log("Setting plans from response data:", response.data);
                setPlans(response.data);
            } else {
                // console.error("Unexpected response format:", response);
                toast.error('Unexpected data format received');
                setPlans([]);
            }
        } catch (error) {
            console.error('Error fetching plans:', error);
            toast.error('Failed to fetch subscription plans');
            setPlans([]);
        }
    };

    const handleSubscribe = async (planId) => {
        console.log("Subscribing to plan:", planId);
        try {
            if (!token) {
                navigate('/login');
                return;
            }

            const response = await createSubscription(planId, token);
            console.log("Subscription response:", response);

        if (!response) {
            throw new Error('Subscription response is null');
        }

        if (!response.orderId || !response.amount) {
            throw new Error('Invalid subscription response: missing orderId or amount');
        }
            if (response && response.orderId && response.amount) {
                const options = {
                    key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Your Razorpay key ID
                    amount: response.amount,
                    currency: response.currency,
                    name: 'Your Company Name',
                    description: 'Subscription Payment',
                    order_id: response.orderId,
                    handler: async (paymentResponse) => {
                        try {
                            await handlePaymentCallback(token, {
                                razorpay_payment_id: paymentResponse.razorpay_payment_id,
                                razorpay_order_id: paymentResponse.razorpay_order_id,
                                razorpay_signature: paymentResponse.razorpay_signature
                            });
                            toast.success('Payment successful, subscription activated!');
                        } catch (error) {
                            toast.error('Payment verification failed.');
                        }
                    },
                    prefill: {
                        name: 'Your Name',
                        email: 'your_email@example.com',
                        contact: '1234567890'
                    },
                    theme: {
                        color: '#3399cc'
                    }
                };

                const paymentObject = new window.Razorpay(options);
                paymentObject.open();
            } else {
                toast.error('Invalid subscription response.');
            }
        } catch (error) {
            console.error('Error initiating subscription:', error);
            toast.error('Error initiating subscription.');
        }
    };

    return (
        <div className="subscription-component">
            <h1>Subscription Plans</h1>
            <div>
                <h2>Available Plans</h2>
                {/* {console.log("Rendering plans:", plans)} */}
                {Array.isArray(plans) && plans.length > 0 ? (
                    plans.map(plan => (
                        <div key={plan.id} className="plan">
                            <h3>{plan.name}</h3>
                            <p>Price: ₹{plan.price}</p>
                            <button onClick={() => handleSubscribe(plan.id)}>Subscribe</button>
                        </div>
                    ))
                ) : (
                    <p>No plans available at the moment.</p>
                )}
            </div>
        </div>
    );
};

export default SubscriptionComponent;
