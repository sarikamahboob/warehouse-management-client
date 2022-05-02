import React, { useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import auth from "../../../firebase.init";
import useToken from "../../Hooks/useToken";
import Loading from "../../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import signin from "../../../Images/signin.png";
import "./SignIn.css";

const SignIn = () => {
  const emailRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, passwordError] =
    useSendPasswordResetEmail(auth);
  const [token] = useToken(user);

  let from = location.state?.from?.pathname || "/";
  let errorElement;

  const handleSignIn = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    await signInWithEmailAndPassword(email, password);
  };

  if (token) {
    navigate(from, { replace: true });
  }

  if (loading || sending) {
    return <Loading />;
  }

  if (error || passwordError) {
    errorElement = (
      <div>
        <p className="text-danger">
          {error?.message} {error?.passwordError}
        </p>
      </div>
    );
  }

  const resetPassword = async (event) => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent Email");
    } else {
      toast("Please Enter Your Email Address");
    }
  };
  return (
    <div className="container">
      <div className="signin-form-container">
        <div className="signin-form">
          <h1 className="form-title">Sign In</h1>
          <form className="form" onSubmit={handleSignIn}>
            <input
              ref={emailRef}
              type="email"
              name="email"
              id=""
              placeholder="Enter Your Email"
              required
            />
            <input
              type="password"
              name="password"
              id=""
              placeholder="Password"
              required
            />

            <button>Sign In</button>
          </form>
          {errorElement}

          <p className="toggle-link">
            New to E-Warehouse ?
            <span>
              <Link
                to="/signup"
                onClick={() => navigate(`/signup`)}
                className="ms-2 text-decoration-none"
                style={{ color: "#e85b40" }}
              >
                Sign Up
              </Link>
            </span>
          </p>

          <p className="toggle-link">
            Forget Password?
            <span
              onClick={resetPassword}
              className="ms-2 text-decoration-none"
              style={{ color: "#e85b40" }}
            >
              Reset Password
            </span>
          </p>

          <div className="or">
            <div className="line"></div>
            <span>or</span>
            <div className="line"></div>
          </div>

          <SocialLogin />
          <ToastContainer />
        </div>
        <div className="signin-image">
          <img src={signin} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
