import PropTypes from "prop-types";
import Button from "./Button";
const Header = ({ title }) => {
  const onClick = () => {
    console.log("Click");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button className="btn" color="green" text="Add" clickBtn={onClick} />
    </header>
  );
};

// default props
Header.defaultProps = {
  title: "My Task Tracker",
};

// type of props
Header.propTypes = {
  title: PropTypes.string.isRequired,
  clickBtn: PropTypes.func,
};
export default Header;
