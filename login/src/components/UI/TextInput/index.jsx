import PropTypes from "prop-types";
import "./index.css";
const TextInput = ({
  id,
  name,
  placeholder,
  type = "text",
  label,
  startIcon,
  endIcon,
  onChange,
  value,
  required,
}) => {
  return (
    <div className="text-input-container">
      <div className="text-icon-container">
        {startIcon && <img src={startIcon} alt="Start Icon" />}
        <div className="input-container">
          <label>{label}</label>
          <input
            type={type}
            id={id}
            name={name}
            required={required}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
          />
        </div>
      </div>
      {endIcon && (
        <img
          src={endIcon}
          alt="End Icon"
          style={{ width: "24px", height: "24px" }}
        />
      )}
    </div>
  );
};
TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  startIcon: PropTypes.string,
  label: PropTypes.string,
  endIcon: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  required: PropTypes.bool,
};

export default TextInput;
