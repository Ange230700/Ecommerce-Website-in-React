/*
  eslint-disable react/jsx-props-no-spreading
*/

import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMain } from "../contexts/MainContext";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

function FlashCard() {
  const { productItems, addToCart } = useMain();

  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings}>
      {productItems.map((productItem) => (
        <div className="box" key={productItem.id}>
          <div className="product mtop">
            <div className="img">
              <span className="discount">{productItem.discount}% Off</span>
              <img src={`/assets/${productItem.cover}`} alt="discount pic" />
              <div className="product-like">
                <label>{count}</label> <br />
                {/* <i
                  className="fa-regular fa-heart"
                  onClick={increment}
                  onKeyDown={(event) => {
                    // Trigger the click event when the "Enter" key is pressed
                    if (event.key === "Enter") {
                      increment();
                    }
                  }}
                  role="button" // Make this element behave like a button
                  tabIndex={0} // Make this element focusable
                  aria-label="Increment the count" // Add an aria-label attribute
                /> */}
                <img src="/assets/icons/like.svg" alt="like icon" />
              </div>
            </div>
            <div className="product-details">
              <h3>{productItem.name}</h3>
              <div className="rate">
                {/* <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" /> */}
                <button type="button" onClick={increment}>
                  <img src="/assets/icons/star.svg" alt="rate" />
                </button>
                <button type="button" onClick={increment}>
                  <img src="/assets/icons/star.svg" alt="rate" />
                </button>
                <button type="button" onClick={increment}>
                  <img src="/assets/icons/star.svg" alt="rate" />
                </button>
                <button type="button" onClick={increment}>
                  <img src="/assets/icons/star.svg" alt="rate" />
                </button>
                <button type="button" onClick={increment}>
                  <img src="/assets/icons/star.svg" alt="rate" />
                </button>
              </div>
              <div className="price">
                <h4>${productItem.price}.00 </h4>
                <button
                  type="button"
                  onClick={() => addToCart(productItems)}
                  aria-label="Add to cart" // Add an aria-label attribute
                >
                  {/* <i className="fa fa-plus" /> */}
                  <img src="/assets/icons/add.svg" alt="more" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default FlashCard;
