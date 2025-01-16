import Card from "../UI/Card";
import GoogleLogo from "../../assets/GoogleLogo.svg";
import FacebookLogo from "../../assets/FacebookLogo.svg";
import UserIcon from "../../assets/UserIcon.svg";
import EmailIcon from "../../assets/EmailIcon.svg";
import PasswordIcon from "../../assets/PasswordIcon.svg";
import VisibilityIcon from "../../assets/visibility.svg";
import { Button, Divider } from "@mui/material";
import TextInput from "../UI/TextInput";
import Header from "../Header";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "./index.css";
import { useEffect } from "react";
const LoginForm = () => {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  });
  const onUsernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  const onEmailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitHanlder = async (e) => {
    e.preventDefault();
    console.log("Username", username);
    try {
      if (
        username.trim() === "" ||
        email.trim() === "" ||
        password.trim() === ""
      ) {
        console.log("Please fill all the fields");
        setError("Please fill all the fields");
        return;
      }
      if (password.length < 8) {
        console.log("Password must be at least 8 characters long");
        setError("Password must be at least 8 characters long");
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        console.log("Please enter a valid email");
        setError("Please enter a valid email");
        return;
      }
      if (username?.toLowerCase() !== "emilys") {
        console.log("Please enter a valid username");
        setError("Please enter a valid username");
        return;
      }
      setIsLoading(true);
      const data = JSON.stringify({
        username: username,
        password: password,
        email: email,
        expiresInMins: 30,
      });
      const response = await axios.post(
        "https://dummyjson.com/auth/login",
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Response", response.data);
      sessionStorage.setItem("isLoggedIn", !!response.data.accessToken);
      sessionStorage.setItem("accessToken", response.data.accessToken);
      sessionStorage.setItem("userData", JSON.stringify(response.data));
      setError(null);
      navigate("/home");
    } catch (error) {
      console.log("Error", error);
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      {isLoading ? (
        <p className="loader">Loading...</p>
      ) : (
        <Card>
          <div className="card-container">
            {/* Header */}
            <Header />
            {/* SSO */}
            <div className="sso-container">
              <Button
                classes={{
                  root: "sso-button",
                  text: "sso-button-text",
                }}
              >
                <img src={GoogleLogo} alt="Google Logo" />
                Login with Google
              </Button>
              <Button
                classes={{
                  root: "sso-button",
                  text: "sso-button-text",
                }}
              >
                <img src={FacebookLogo} alt="Facebook Logo" />
                Login with Facebook
              </Button>
            </div>
            {/* OR */}
            <div className="divider-container">
              <Divider classes={{ root: "divider" }}>OR</Divider>
            </div>
            {/* Form  */}
            <div className="form-container">
              <TextInput
                id="username"
                name="username"
                placeholder="username"
                type="text"
                startIcon={UserIcon}
                label="Username"
                onChange={onUsernameChangeHandler}
                value={username}
              />
              <TextInput
                id="email"
                name="email"
                placeholder="username@gmail.com"
                type="email"
                startIcon={EmailIcon}
                label="Email"
                onChange={onEmailChangeHandler}
                value={email}
              />
              <TextInput
                id="password"
                name="password"
                placeholder="***********"
                type="password"
                startIcon={PasswordIcon}
                label="Password"
                endIcon={VisibilityIcon}
                onChange={onPasswordChangeHandler}
                value={password}
              />
            </div>
            <div className="rem-forget-container">
              <div className="checkbox-container">
                <input type="checkbox" id="rememberMe" name="rememberMe" />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <a href="#">Forgot Password?</a>
            </div>
            <Button
              type="submit"
              variant="contained"
              classes={{
                root: "login-button",
              }}
              onClick={onSubmitHanlder}
            >
              Login
            </Button>
            {!!error && <p className="error">{error}</p>}
            <div className="signup-container">
              <p>
                Don&apos;t have an account? <a href="#">Register</a>
              </p>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default LoginForm;
