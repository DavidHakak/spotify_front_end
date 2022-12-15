import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MainContext from "../../context/MainContext";
import UserContext from "../../context/UserContext";
import "./Login.css";

function Login() {
  const { setUserDetails } = useContext(UserContext);

  const { setUserFullName } = useContext(MainContext);

  const [panelActive, setPanelActive] = useState(false);

  const [userName, setUserName] = useState();

  const [userPassword, setUserPassword] = useState();

  const [userEmail, setUserUserEmail] = useState();

  const navigate = useNavigate();

  const PORT = "http://localhost:9999";

  const login = () => {
    if (userName && userPassword) {
      axios
        .post(PORT + "/api/user/login", {
          userName,
          password: userPassword,
        })
        .then((response) => {
          if (response.data.token) {
            setUserDetails(response.data);
            setUserFullName(response.data.userExists.userName);
            localStorage.setItem('userToken', JSON.stringify(response.data.token));
            navigate("/searchSongs");
          }
        });
    }
  };

  const createNewUser = () => {
    if (userName && userPassword) {
      axios
        .post(PORT + "/api/user/register", {
          userName,
          email: userEmail,
          password: userPassword,
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.token) {
            setUserDetails(response.data);
            setUserFullName(response.data.newUser.userName);
            localStorage.setItem('userToken', JSON.stringify(response.data.token));
            navigate("/searchSongs");
          }
        });
    }
  };

  return (
    <div className="background">
      <div className="Login">
        <div
          class={`login-container ${panelActive ? "right-panel-active" : ""} `}
          id="login-container"
        >
          <div class="form-container sign-up-container">
            <form className="form-login" action="#">
              <h1 className="title-login">Create Account</h1>
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
              <span className="title-login-span">
                or use your email for registration
              </span>
              <input
                className="input-login"
                type="text"
                placeholder="Full name"
                onBlur={(e) => {
                  setUserUserEmail(e.target.value);
                }}
              />
              <input
                className="input-login"
                type="text"
                placeholder="User name"
                required
                onBlur={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <input
                className="input-login"
                type="password"
                placeholder="Password"
                required
                onBlur={(e) => {
                  setUserPassword(e.target.value);
                }}
              />
              <input
                className="input-login"
                type="email"
                placeholder="Email"
                onBlur={(e) => {
                  setUserUserEmail(e.target.value);
                }}
              />
              <button className="button-login" onClick={createNewUser}>
                Sign Up
              </button>
            </form>
          </div>
          <div class="form-container sign-in-container">
            <form className="form-login" action="#">
              <h1 className="title-login">Sign in</h1>
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
              <span className="title-login-span">or use your account</span>
              <input
                className="input-login"
                type="text"
                placeholder="User name"
                required
                onBlur={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <input
                className="input-login"
                type="password"
                placeholder="Password"
                required
                onBlur={(e) => {
                  setUserPassword(e.target.value);
                }}
              />
              <a href="#">Forgot your password?</a>
              <button className="button-login" onClick={login}>
                Sign In
              </button>
            </form>
          </div>
          <div class="overlay-container-login">
            <div class="overlay-login">
              <div class="overlay-panel overlay-left">
                <h1 className="title-login">Welcome Back!</h1>
                <p className="p-login">
                  To keep connected with us please login with your personal info
                </p>
                <button
                  class="ghost button-login"
                  id="signIn"
                  onClick={() => {
                    setPanelActive(false);
                  }}
                >
                  Sign In
                </button>
              </div>
              <div class="overlay-panel overlay-right">
                <h1 className="title-login">Hello, Friend!</h1>
                <p className="p-login">
                  Enter your personal details and start play with us
                </p>
                <button
                  class="ghost button-login"
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
    </div>
  );
}

export default Login;
