import Illustration from "../../assets/Illustration.svg";
import LoginForm from "../../components/LoginForm";
import "./index.css";
const LoginPage = () => {
  return (
    <div className="login-container">
      {/* Image */}
      <div className="image-container">
        <img src={Illustration} alt="Illustration Logo" />
      </div>
      {/* Login Component */}
      <LoginForm />
    </div>
  );
};

export default LoginPage;
