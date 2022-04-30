import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useToken from "../../Hooks/useToken";
import Loading from "../../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./SignUp.css";
import signup from "./signup.jpg";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const navigate = useNavigate();
  let errorElement;
  let passwordError;
  const [errors, setErrors] = useState("");
  const [token] = useToken(user);

  const handleSignUp = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(email, password);
    } else {
      console.log("hello");
      setErrors("Passwords Don't Match");
    }
  };

  if (token) {
    navigate(`/home`);
  }
  if (loading) {
    return <Loading />;
  }
  if (error) {
    errorElement = (
      <div>
        <p className="error-message">{error.message}</p>
      </div>
    );
  }
  return (
    <div className="form-container">
      <img src={signup} alt="" className="w-100" />
      <h1 className="form-title">Sign Up</h1>
      <form className="form" onSubmit={handleSignUp}>
        <input type="text" name="name" id="" placeholder="Enter Your Name" />
        <input
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
        <input
          type="password"
          name="confirmPassword"
          id=""
          placeholder="Confirm Password"
          required
        />
        <p className="error-message">{errors}</p>
        <button>Sign Up</button>
      </form>

      {errorElement}

      <p className="toggle-link">
        Already have an account ?
        <span>
          <Link
            to="/signin"
            onClick={() => navigate(`/signin`)}
            className="ms-2 text-decoration-none"
            style={{ color: "#e85b40", fontWeight: "500" }}
          >
            Sign In
          </Link>
        </span>
      </p>

      <div className="or">
        <div className="line"></div>
        <span>or</span>
        <div className="line"></div>
      </div>

      <SocialLogin />
    </div>
  );
};

export default SignUp;
