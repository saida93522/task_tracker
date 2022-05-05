import React from "react";
import PropTypes from "prop-types";

const Button = ({ btnText, color, onClick }) => {
  return (
    <button className="btn add-btn" style={{ color: color }} onClick={onClick}>
      {btnText}
    </button>
  );
};

Button.defaultProps = {
  btnText: "Add",
  color: "light",
};

Button.propTypes = {
  btnText: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
