import React from "react";
import PropTypes from "prop-types";

const Button = ({ btnText, color, onClick }) => {
  return (
    <button className="btn" style={{ color: color }} onClick={onClick}>
      {btnText}
    </button>
  );
};

Button.defaultProps = {
  btnText: "Add",
  color: "steelblue",
};

Button.propTypes = {
  btnText: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
