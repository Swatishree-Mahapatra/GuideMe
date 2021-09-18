import React, { useState } from "react";
import "./LoginRegister.css";
import {Link} from 'react-router-dom';

const LoginRegister = () => {
  const [addclass, setaddclass] = useState("");
  return (
    <div className={`container ${addclass}`} id="container">
      <div className="form-container  sign-up-container">
        <form>
          <h1>Create Account</h1>
          <input type="text" placeholder="NAME" />
          <input type="email" placeholder="EMAIL" />
          <input type="password" placeholder="PASSWORD" />
          <button type="submit">REGISTER</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form>
          <h1>SIGN IN</h1>
          <input type="email" placeholder="EMAIL" />
          <input type="password" placeholder="PASSWORD" />
          <button type="submit"><Link to='/dashboard'>SIGN IN</Link> </button>
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
              // onClick={() => setaddclass("")}
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
  );
};

export default LoginRegister;
