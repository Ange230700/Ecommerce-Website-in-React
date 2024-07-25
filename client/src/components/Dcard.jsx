/*
  eslint-disable react/jsx-props-no-spreading
*/

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ddata from "../services/Ddata";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

function Dcard() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings}>
      {Ddata.map((value) => (
        <div className="box product" key={value.id}>
          <div className="img">
            <img
              src={`/assets/${value.cover}`}
              alt="discount pic"
              width="100%"
            />
          </div>
          <h4>{value.name}</h4>
          <span>{value.price}</span>
        </div>
      ))}
    </Slider>
  );
}

export default Dcard;
