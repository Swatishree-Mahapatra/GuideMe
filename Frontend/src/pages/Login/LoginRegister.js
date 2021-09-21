import React, { useState,useRef } from "react";
import "./LoginRegister.css";
import { Link } from "react-router-dom";
import {useAuth} from "../../firebase/AuthContext";
import { useHistory } from "react-router-dom";

const LoginRegister = () => {
  const [addclass, setaddclass] = useState("");

  const history = useHistory();

  //signup
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const  { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  
  async function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/courses")
    } catch {
      setError("Use Different UserName")
    }

    setLoading(false)
  }

  
  async function handleSubmitLogin(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      console.log("OK");
      history.push("/courses");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }




  return (
    <div className="Login">
          <div className={`container ${addclass}`} id="container">
      <div className="form-container  sign-up-container">
        <form onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <p>{error}</p>
          <input type="email" placeholder="USERID" ref={emailRef} required />
          <input type="password" placeholder="PASSWORD" ref={passwordRef} required/>
          <input type="password" placeholder="RE-TYPE-PASSWORD" ref={passwordConfirmRef} required/>
          <button type="submit">REGISTER</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form onSubmit={handleSubmitLogin}>
          <h1>SIGN IN</h1>
          <input type="email" placeholder="EMAIL" href={emailRef} />
          <input type="password" placeholder="PASSWORD" href={passwordRef} />
          <button type="submit">
            <Link to="/courses">SIGN IN</Link>{" "}
          </button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h2>Welcome Back!!</h2>
            <p>To keep connected with us login with your personal info</p>
            <button
              className="check"
              id="signIn"
              onClick={() => setaddclass("")}
            >
              SIGN IN
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h2>Hello Friends!!</h2>
            <p>Enter your details and start your journey with us.</p>
            <button
              className="check"
              id="signUp"
              onClick={() => setaddclass("right-panel-active")}
            >
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default LoginRegister;
