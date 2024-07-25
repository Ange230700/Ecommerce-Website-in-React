import PropTypes from "prop-types";

function CustomDots({ dots }) {
  return (
    <ul
      style={{
        margin: "0px",
        padding: "10px",
        position: "absolute",
        bottom: "10px",
        width: "100%",
      }}
    >
      {dots}
    </ul>
  );
}

CustomDots.propTypes = {
  dots: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default CustomDots;
