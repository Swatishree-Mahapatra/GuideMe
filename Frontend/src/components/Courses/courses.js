import React, { useState } from "react";
import "./courses.css";
import {Link} from 'react-router-dom';

const LoginRegister = () => {
  const [addclass, setaddclass] = useState("");
  return (
    <div className={`container ${addclass}`} id="container">
      <div className="form-container  sign-up-container">
        <form>
          <h1>Choose Courses</h1>
          <ul>
            <li>GATE</li>
            <li>CAT</li>
            <li>CLAT</li>
            <li>MBA</li>
          </ul>
          <button type="submit"><Link to='/dashboard'>LET'S BEGIN</Link> </button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form>
          <h1>CHOOSE COURSES</h1>
          <ul>
            <li>JEE</li>
            <li>NEET</li>
            <li>KVPY</li>
            <li>NTSE</li>
          </ul>
          
          <button type="submit"><Link to='/dashboard'>LET'S BEGIN</Link> </button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h2>Welcome Back!!</h2>
            <p>Undergraduate Aspirant ??</p>
            <button
              className="check"
              id="signIn"
              onClick={() => setaddclass("")}
            >
              CHECK ME OUT
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h2>Hello Friends!!</h2>
            <p>Preparing for Postgraduate Entrances ??</p>
            <button
              className="check"
              id="signUp"
              onClick={() => setaddclass("right-panel-active")}
            >
              FOLLOW ME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
