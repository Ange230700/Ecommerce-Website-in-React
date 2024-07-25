import { useState } from "react";
import { useMain } from "../contexts/MainContext";

function ShopCart() {
  const { productItems, addToCart } = useMain();

  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  // console.info("shopItems in ShopCart:", productItems);

  return (
    <>
      {productItems &&
        productItems.map((productItem) => (
          <div className="box" key={productItem.id}>
            <div className="product mtop">
              <div className="img">
                <span className="discount">{productItem.discount}% Off</span>
                <img src={`/assets/${productItem.cover}`} alt="shop cart pic" />
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
                  {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                  <button
                    type="button"
                    onClick={() => addToCart(productItem)}
                    aria-label="Add to cart"
                  >
                    {/* <i className="fa fa-plus" /> */}
                    <img src="/assets/icons/add.svg" alt="more" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      <div />
    </>
  );
}

export default ShopCart;
