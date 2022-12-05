import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const userList = [
    { name: "d", password: "12" },
    { name: "tamar", password: "123456" },
  ];

  const [panelActive, setPanelActive] = useState(false);

  const [userName, setUserName] = useState();

  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const checkUserInputs = () => {
    userList.find((user) => {
      
      if (user.name === userName && user.password === password) {
        navigate("/inLogin/searchSongs");
    
      } else {
        console.log("user name or password not true");
      }
    });
  };

  return (
    <div className="Login">
      <div
        class={`container ${panelActive ? "right-panel-active" : ""} `}
        id="container"
      >
        <div class="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            {/* <div class="social-container">
              <a href="#" class="social">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social">
                <i class="fab fa-google-plus-g"></i>
              </a>
              <a href="#" class="social">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div> */}
            <span>or use your email for registration</span>
            <input type="text" placeholder="User name" required />
            <input type="password" placeholder="Password" required />
            <input type="email" placeholder="Email" />
            <button>Sign Up</button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            {/* <div class="social-container">
              <a href="#" class="social">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social">
                <i class="fab fa-google-plus-g"></i>
              </a>
              <a href="#" class="social">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div> */}
            <span>or use your account</span>
            <input
              type="text"
              placeholder="User name"
              required
              onBlur={(e) => {
                setUserName(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              required
              onBlur={(e) => {
                setPassword(e.target.value);
              }}
            />
            <a href="#">Forgot your password?</a>
            <button onClick={checkUserInputs}>Sign In</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                class="ghost"
                id="signIn"
                onClick={() => {
                  setPanelActive(false);
                }}
              >
                Sign In
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start play with us</p>
              <button
                class="ghost"
                id="signUp"
                onClick={() => {
                  setPanelActive(true);
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
