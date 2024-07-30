import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getCurrentSubscription } from "../../../services/operations/subscription"; // Adjust the path as needed
import { toast } from "react-hot-toast";

function PrivateRoute({ children }) {
  const { token } = useSelector((state) => state.auth);
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      const fetchSubscription = async () => {
        try {
          const result = await getCurrentSubscription(token);
          if (result && result.status === 'expired') {
            setSubscriptionStatus('expired');
          } else if (result) {
            setSubscriptionStatus('active');
          } else {
            setSubscriptionStatus('pending');
          }
        } catch (error) {
          toast.error('Failed to fetch subscription status');
          setSubscriptionStatus('error');
        } finally {
          setLoading(false);
        }
      };

      fetchSubscription();
    } else {
      setLoading(false);
    }
  }, [token]);

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while checking subscription
  }

  if (token === null) {
    return <Navigate to="/login" />;
  }

  if (subscriptionStatus === 'expired' || subscriptionStatus === 'pending') {
    return <Navigate to="/sub" />;
  }

  return children;
}

export default PrivateRoute;
