import PropTypes from "prop-types";
import "./index.css";
const Card = ({ children, style, className }) => {
  const classes = className ? "card " + className : "card";
  return (
    <div style={style} className={classes}>
      {children}
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default Card;
