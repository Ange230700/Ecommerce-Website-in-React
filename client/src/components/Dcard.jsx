import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ddata from "../services/Ddata";

function Dcard() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider
      appendDots={settings.appendDots}
      arrows={settings.arrows}
      autoplay={settings.autoplay}
    >
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
