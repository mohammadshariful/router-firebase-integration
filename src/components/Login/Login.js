import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import app from "../../firebase.init";
import "./Login.css";
const auth = getAuth(app);
const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handlerSignIn = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <h2>Please Login</h2>
      <div style={{ margin: "20px" }}>
        <button onClick={handlerSignIn}>sing in google</button>
      </div>
      <form>
        <input type="text" name="" id="" placeholder="Your Email" />
        <br />
        <input type="text" name="" id="" placeholder="password" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
