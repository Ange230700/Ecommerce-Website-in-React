import { useState } from "react";
import { useMain } from "../contexts/MainContext";

function ShopCart() {
  const { shopItems, addToCart } = useMain();

  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      {shopItems &&
        shopItems.map((shopItem) => (
          <div className="box" key={shopItem.id}>
            <div className="product mtop">
              <div className="img">
                <span className="discount">{shopItem.discount}% Off</span>
                <img
                  src={`${import.meta.env.VITE_APP_URL}/${shopItem.cover}`}
                  alt="shop cart pic"
                />
                <div className="product-like">
                  <label>{count}</label> <br />
                  <i
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
                  />
                </div>
              </div>
              <div className="product-details">
                <h3>{shopItem.name}</h3>
                <div className="rate">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <div className="price">
                  <h4>${shopItem.price}.00 </h4>
                  {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                  <button
                    type="button"
                    onClick={() => addToCart(shopItem)}
                    aria-label="Add to cart"
                  >
                    <i className="fa fa-plus" />
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
