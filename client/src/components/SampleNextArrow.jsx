import PropTypes from "prop-types";

function SampleNextArrow(props) {
  const { onClick } = props;

  return (
    <div className="control-btn">
      <button
        type="button"
        className="next"
        onClick={onClick}
        aria-label="Next"
      >
        <i className="fa fa-long-arrow-alt-right" />
      </button>
    </div>
  );
}

SampleNextArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SampleNextArrow;
