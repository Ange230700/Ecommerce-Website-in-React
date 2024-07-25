/*
  eslint-disable react/jsx-props-no-spreading
*/

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tdata from "../services/Tdata";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

function TopCart() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings}>
      {Tdata.map((value) => (
        <div className="box product" key={value.id}>
          <div className="nametop d_flex">
            <span className="tleft">{value.para}</span>
            <span className="tright">{value.desc}</span>
          </div>
          <div className="img">
            <img
              src={`/assets/${value.cover}`}
              alt="
            top cart pic
            "
            />
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default TopCart;
