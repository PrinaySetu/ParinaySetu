// ShoppingAndDelivery.jsx
import React from 'react';

const ShoppingAndDelivery = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg my-10">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Shopping and Delivery</h1>
            <p className="text-gray-700 mb-4">
                For international buyers, orders are shipped and delivered through registered
                international courier companies and/or International Speed Post only. For
                domestic buyers, orders are shipped through registered domestic courier
                companies and/or Speed Post only.
            </p>
            <p className="text-gray-700 mb-4">
                Orders are shipped within 0-7 days or as per the delivery date agreed at the time
                of order confirmation, and the delivery of the shipment is subject to Courier Company
                or postal service norms. Parinay Setu is not liable for any delay in delivery
                by the courier company or postal authorities and only guarantees to hand over the
                consignment to the courier company or postal authorities within 0-7 days from the date
                of order and payment or as per the delivery date agreed at the time of order confirmation.
            </p>
            <p className="text-gray-700 mb-4">
                Delivery of all orders will be to the address provided by the buyer. The delivery
                of our services will be confirmed via email to the address specified during registration.
            </p>
            <p className="text-gray-700">
                For any issues in utilizing our services, you may contact our helpdesk at:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                <li>Phone: 9479425710</li>
                <li>Email: parinaysetu2701@gmail.com</li>
            </ul>
        </div>
    );
};

export default ShoppingAndDelivery;
