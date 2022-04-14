import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const navigate = useNavigate();

  let errorMessage;

  if (error) {
    errorMessage = <p className="text-danger">Error: {error.message}</p>;
  }

  if (user) {
    navigate('/home');
  }

  return (
    <>
      <div className="d-flex">
        <div style={{ height: '1px' }} className="bg-primary w-50"></div>
        <p style={{ marginTop: '-13px', fontSize: '18px' }} className="px-3">
          or
        </p>
        <div style={{ height: '1px' }} className="bg-primary w-50"></div>
      </div>
      {errorMessage}
      <div className="text-center">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-primary w-50"
        >
          Sign In with google
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
