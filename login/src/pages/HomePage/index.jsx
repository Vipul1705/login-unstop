import Home from "../../components/Home";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import "./index.css";
const HomePage = () => {
  const navigate = useNavigate();

  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  const userData = JSON.parse(sessionStorage.getItem("userData"));

  const name = userData?.firstName + " " + userData?.lastName;
  console.log("userData", userData, name);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/auth/login");
    }
  });

  const onLogoutHandler = () => {
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("userData");
    navigate("/auth/login");
  };

  return (
    <div className="home-container">
      <Home
        name={name}
        email={userData?.email}
        gender={userData?.gender}
        onLogout={onLogoutHandler}
      />
    </div>
  );
};

export default HomePage;
