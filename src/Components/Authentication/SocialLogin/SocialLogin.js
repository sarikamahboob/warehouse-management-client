import React from "react";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
    useSignInWithFacebook(auth);
  let errorElement;
  let from = location.state?.from?.pathname || "/";

  if (googleUser || githubUser || facebookUser) {
    navigate(from, { replace: true });
  }

  if (googleLoading || githubLoading || facebookLoading) {
    <Loading />;
  }

  if (googleError || githubError || facebookError) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {googleError?.message} {githubError?.message}
          {facebookError?.message}
        </p>
      </div>
    );
  }
  return (
    <div>
      <div className="social-login">
        <button onClick={() => signInWithGoogle()}>
          <span>
            <AiFillGoogleCircle />
          </span>
          Sign Up with Google
        </button>

        <button onClick={() => signInWithFacebook()}>
          <span>
            <BsFacebook />
          </span>
          Sign Up with Facebook
        </button>

        <button onClick={() => signInWithGithub()}>
          <span>
            <BsGithub />
          </span>
          Sign Up with Github
        </button>
      </div>
      {errorElement}
    </div>
  );
};

export default SocialLogin;
