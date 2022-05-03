import PropTypes from "prop-types";

const Button = ({ color, text, clickBtn }) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={clickBtn}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Button;
