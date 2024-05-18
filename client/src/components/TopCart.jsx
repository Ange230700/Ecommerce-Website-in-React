import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tdata from "../services/Tdata";

function TopCart() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider
      appendDots={settings.appendDots}
      arrows={settings.arrows}
      autoplay={settings.autoplay}
    >
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
