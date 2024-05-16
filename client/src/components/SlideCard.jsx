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
    appendDots: (dots) => <ul style={{ margin: "0px" }}>{dots}</ul>, // eslint-disable-line
  };

  return (
    <Slider
      appendDots={settings.appendDots}
      arrows={settings.arrows}
      autoplay={settings.autoplay}
    >
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
