import PropTypes from "prop-types";

function SlideItem({ title, desc, cover }) {
  return (
    <div className="box d_flex top">
      <div className="left">
        <h1>{title}</h1>
        <p>{desc}</p>
        <button type="button" className="btn-primary">
          Visit Collections
        </button>
      </div>
      <div className="right">
        <img src={`${import.meta.env.VITE_APP_URL}/${cover}`} alt={title} />
      </div>
    </div>
  );
}

SlideItem.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default SlideItem;
