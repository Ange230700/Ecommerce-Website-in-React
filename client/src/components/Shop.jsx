import { useMain } from "../contexts/MainContext";
import Catg from "./Catg";
import ShopCart from "./ShopCart";

function Shop() {
  const { shopItems, addToCart } = useMain();

  // console.info("shopItems:", shopItems);

  return (
    <section className="shop background">
      <div className="container d_flex">
        <Catg />

        <div className="contentWidth">
          <div className="heading d_flex">
            <div className="heading-left row  f_flex">
              <h2>Mobile Phones</h2>
            </div>
            <div className="heading-right row">
              <span>View all</span>
              {/* <i className="fa-solid fa-caret-right" /> */}
              <img
                className="view-all-icon"
                src="/assets/icons/caret.svg"
                alt="view all"
              />
            </div>
          </div>
          {/* <div className="product-content  grid1"> */}
          <div className="product-content  wrap">
            <ShopCart addToCart={addToCart} shopItems={shopItems} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shop;
