import Header from "../Header";
import Card from "../UI/Card";
import Avatar from "../../assets/Avatar.svg";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./index.css";
const Home = ({ name, email, gender, onLogout }) => {
  return (
    <div className="home">
      {/* Header */}
      <Header />
      {/* LoggedIn Card */}
      <Card className="avatar-card">
        <div className="avatar-img-container">
          <img src={Avatar} alt="Avatar" />
        </div>
        <div className="user-details-container">
          <h3>{name}</h3>
          <div>
            <p>{email}</p>
            <p>{gender}</p>
          </div>
        </div>
        <Button
          variant="contained"
          classes={{ root: "logout-button" }}
          onClick={onLogout}
        >
          Logout
        </Button>
      </Card>
    </div>
  );
};
Home.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default Home;
