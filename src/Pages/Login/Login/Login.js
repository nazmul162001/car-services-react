import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (user) {
    navigate(from, { replace: true });
  }

  let errorMessage;
  if (error) {
    errorMessage = <p className="text-danger">Error: {error.message}</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // console.log(email, password);
    signInWithEmailAndPassword(email, password);
  };

  const navigateRegister = (e) => {
    navigate('/register');
  };

  // reset
  const resetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    alert('Sent email');
  };

  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-primary text-center mt-3">Plelasee login here </h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        {errorMessage}
        <Button
          className="w-50 mb-3 d-block mx-auto"
          variant="primary"
          type="submit"
        >
          Login
        </Button>
      </Form>
      <p>
        {' '}
        Forget password ?{' '}
        <Link to="/register" className="text-primary" onClick={resetPassword}>
          reset password
        </Link>{' '}
      </p>
      <p>
        {' '}
        New to here? please{' '}
        <Link to="/register" className="text-primary" onClick={navigateRegister}>
          register here
        </Link>{' '}
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
