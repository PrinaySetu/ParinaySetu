import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { getSubscriptionPlans, createSubscription, handlePaymentCallback } from '../../services/operations/subscription';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CheckIcon } from '@heroicons/react/20/solid';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer'

const SubscriptionComponent = () => {
    const [plans, setPlans] = useState([]);
    const token = useSelector((state) => state.auth.token);
    const navigate = useNavigate();

    useEffect(() => {
        fetchPlans();
    }, []);

    const fetchPlans = async () => {
        try {
            const response = await getSubscriptionPlans();
            if (response && response.data && Array.isArray(response.data)) {
                setPlans(response.data);
            } else {
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
        try {
            if (!token) {
                navigate('/login');
                return;
            }

            const response = await createSubscription(planId, token);
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
                                razorpay_signature: paymentResponse.razorpay_signature,
                            });
                            toast.success('Payment successful, subscription activated!');
                        } catch (error) {
                            toast.error('Payment verification failed.');
                        }
                    },
                    prefill: {
                        name: 'Your Name',
                        email: 'your_email@example.com',
                        contact: '1234567890',
                    },
                    theme: {
                        color: '#FFEB99', // Adjusted to match your theme
                    },
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
        <div className="bg-cornsilk">
            <Navbar />
            <div className="mx-auto  py-24 sm:py-32  max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-5xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-richblack-900 sm:text-4xl">Plans for Everyone</h2>
                    <p className="mt-6 text-lg leading-8 text-richblack-500">
                        Find a plan that's right for you. Choose from a variety of options tailored to your needs.
                    </p>
                </div>
                <div className="mt-16 space-y-8">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className="rounded-5xl border border-yellow-200 bg-white shadow-md p-6 lg:flex lg:justify-between lg:items-center"
                        >
                            <div className="lg:flex-auto">
                                <h3 className="text-5xl font-bold tracking-tight text-richblack-900">{plan.name}</h3>
                                <p className="mt-6 text-base leading-7 text-richblack-500">{plan.description}</p>
                                <div className="mt-6 flex items-center gap-x-4">
                                    <h4 className="flex-none text-sm font-semibold leading-6 text-red-500">What’s included</h4>
                                    <div className="h-px flex-auto bg-yellow-100" />
                                </div>
                                <ul
                                    role="list"
                                    className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-richblack-500 sm:grid-cols-2 sm:gap-6"
                                >
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className="flex gap-x-3">
                                            <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-red-500" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-8 lg:mt-0 lg:ml-8">
                                <div className="rounded-5xl bg-yellow-50 py-10 text-center ring-1 ring-inset ring-yellow-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                                    <div className="mx-auto max-w-xs px-8">
                                        <p className="text-base font-semibold text-richblack-500">Pay once, own it forever</p>
                                        <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                            <span className="text-2xl font-bold tracking-tight text-richblack-900">₹{plan.price}</span>
                                            <span className="text-sm font-semibold leading-6 tracking-wide text-richblack-500">INR</span>
                                        </p>
                                        <button
                                            onClick={() => handleSubscribe(plan.id)}
                                            className="mt-10 block w-full rounded-md bg-khaki-100 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 cursor-pointer"
                                        >
                                            Get access
                                        </button>
                                        <p className="mt-6 text-xs leading-5 text-richblack-500">
                                            Invoices and receipts available for easy company reimbursement
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SubscriptionComponent;



// import React, { useState, useEffect } from 'react';
// import { toast } from 'react-hot-toast';
// import { getSubscriptionPlans, createSubscription, handlePaymentCallback } from '../../services/operations/subscription';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import Navbar from '../Common/Navbar';
// import Footer from '../Common/Footer';

// const SubscriptionComponent = () => {
//     const [plans, setPlans] = useState([]);
//     const token = useSelector((state) => state.auth.token);
//     const navigate = useNavigate();

//     useEffect(() => {
//         fetchPlans();
//     }, []);

//     const fetchPlans = async () => {
//         try {
//             const response = await getSubscriptionPlans();
//             if (response && response.data && Array.isArray(response.data)) {
//                 setPlans(response.data);
//             } else {
//                 toast.error('Unexpected data format received');
//                 setPlans([]);
//             }
//         } catch (error) {
//             console.error('Error fetching plans:', error);
//             toast.error('Failed to fetch subscription plans');
//             setPlans([]);
//         }
//     };

//     const handleSubscribe = async (planId) => {
//         console.log("Subscribing to plan:", planId);
//         try {
//             if (!token) {
//                 navigate('/login');
//                 return;
//             }

//             const response = await createSubscription(planId, token);
//             console.log("Subscription response:", response);

//             if (!response) {
//                 throw new Error('Subscription response is null');
//             }

//             if (!response.orderId || !response.amount) {
//                 throw new Error('Invalid subscription response: missing orderId or amount');
//             }
//             if (response && response.orderId && response.amount) {
//                 const options = {
//                     key: process.env.REACT_APP_RAZORPAY_KEY_ID,
//                     amount: response.amount,
//                     currency: response.currency,
//                     name: 'Your Company Name',
//                     description: 'Subscription Payment',
//                     order_id: response.orderId,
//                     handler: async (paymentResponse) => {
//                         try {
//                             await handlePaymentCallback(token, {
//                                 razorpay_payment_id: paymentResponse.razorpay_payment_id,
//                                 razorpay_order_id: paymentResponse.razorpay_order_id,
//                                 razorpay_signature: paymentResponse.razorpay_signature
//                             });
//                             toast.success('Payment successful, subscription activated!');
//                         } catch (error) {
//                             toast.error('Payment verification failed.');
//                         }
//                     },
//                     prefill: {
//                         name: 'Your Name',
//                         email: 'your_email@example.com',
//                         contact: '1234567890'
//                     },
//                     theme: {
//                         color: '#3399cc'
//                     }
//                 };

//                 const paymentObject = new window.Razorpay(options);
//                 paymentObject.open();
//             } else {
//                 toast.error('Invalid subscription response.');
//             }
//         } catch (error) {
//             console.error('Error initiating subscription:', error);
//             toast.error('Error initiating subscription.');
//         }
//     };

//     return (
//         <div className="bg-cornsilk min-h-screen flex flex-col">
//             <Navbar />
//             <div className="flex flex-col container mx-auto py-12">
//                 <div className="text-center mb-12">
//                     <h1 className="text-4xl font-bold text-richblack-5 mb-4">Plans for Everyone</h1>
//                     <p className="text-lg text-gray-700">Amat minim mollit non deserunt ullamco est sit.</p>
//                 </div>
//                 <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//                     {Array.isArray(plans) && plans.length > 0 ? (
//                         plans.map(plan => (
//                             <div key={plan.id} className={`bg-white p-6 rounded-lg shadow-md border-2 border-gray-200 hover:shadow-lg transition-shadow duration-300 ${plan.type === 'free' ? 'border-green-500' : plan.type === 'standard' ? 'border-blue-500' : 'border-red-500'}`}>
//                                 <div className="flex justify-between items-center mb-4">
//                                     <h3 className="text-xl font-semibold text-richblack-900">{plan.name}</h3>
//                                     <p className="text-5xl font-bold text-gray-900">{plan.price === 0 ? 'Free' : `₹${plan.price}/month`}</p>
//                                 </div>
//                                 <p className="text-gray-700 mb-6">{plan.description}</p>
//                                 <ul className="list-disc list-inside mb-4">
//                                     {plan.features && plan.features.map((feature, index) => (
//                                         <li key={index} className="text-gray-700">{feature}</li>
//                                     ))}
//                                 </ul>
//                                 <button onClick={() => handleSubscribe(plan.id)} className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors duration-300">
//                                     Get started
//                                 </button>
//                             </div>
//                         ))
//                     ) : (
//                         <p className="text-center col-span-full text-gray-700">No plans available at the moment.</p>
//                     )}
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default SubscriptionComponent;
