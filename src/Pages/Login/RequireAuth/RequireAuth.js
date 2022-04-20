import React from 'react';
import {
  useAuthState,
  useSendEmailVerification,
} from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import LoadingSpinner from '../../../Shared/LoadingSpinner/LoadingSpinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // for email  verified
  if (!user.emailVerified) {
    return (
      <div
        style={{ width: '100%', height: '70vh' }}
        className="email-verification d-flex justify-content-center align-items-center text-center"
      >
        <div className="verify-info">
          <h3 className="text-danger py-2">Please Verify Your Email</h3>
          <button
            className="btn btn-secondary py-2 px-4"
            onClick={async () => {
              await sendEmailVerification();
              toast.success('Email sent')
            }}
          >
            Sent Code Again
          </button>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }

  return children;
};

export default RequireAuth;
