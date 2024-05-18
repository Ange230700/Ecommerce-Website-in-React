/* 
  eslint-disable react/no-unstable-nested-components
*/
/*
  eslint-disable no-unused-vars
*/
/*
  eslint-disable react/self-closing-comp
*/
/*
  eslint-disable react/jsx-props-no-spreading
*/
import Slider from "react-slick";
import SlideItem from "./SlideItem";
import Sdata from "../services/Sdata";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlideCard() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => (
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
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: "grey",
        }}
      ></div>
    ),
  };

  return (
    <Slider {...settings}>
      {Sdata.map((value) => (
        <SlideItem
          key={value.id}
          title={value.title}
          desc={value.desc}
          cover={value.cover}
        />
      ))}
    </Slider>
  );
}

export default SlideCard;
