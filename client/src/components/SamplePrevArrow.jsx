import PropTypes from "prop-types";

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="control-btn">
      <button
        type="button"
        className="prev"
        onClick={onClick}
        aria-label="Next"
      >
        <i className="fa fa-long-arrow-alt-left" />
      </button>
    </div>
  );
}

SamplePrevArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SamplePrevArrow;
