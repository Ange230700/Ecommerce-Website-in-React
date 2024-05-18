/*
  eslint-disable jsx-a11y/click-events-have-key-events
*/

import PropTypes from "prop-types";

function SampleNextArrow(props = {}) {
  const { onClick } = props;
  return (
    <div
      className="control-btn next"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label="Next"
    >
      <img src="/assets/icons/long-arrow.svg" alt="right-arrow" />
    </div>
  );
}

SampleNextArrow.propTypes = {
  onClick: PropTypes.func, // eslint-disable-line
};

export default SampleNextArrow;
