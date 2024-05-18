/*
  eslint-disable jsx-a11y/click-events-have-key-events
*/

import PropTypes from "prop-types";

function SamplePrevArrow(props = {}) {
  const { onClick } = props;
  return (
    <div
      className="control-btn prev"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label="Previous"
    >
      <img src="/assets/icons/long-arrow-2.svg" alt="left-arrow" />
    </div>
  );
}

SamplePrevArrow.propTypes = {
  onClick: PropTypes.func, // eslint-disable-line
};

export default SamplePrevArrow;
