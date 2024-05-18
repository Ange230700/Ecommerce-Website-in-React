import { useMain } from "../contexts/MainContext";
import FlashCard from "./FlashCard";

function FlashDeals() {
  const { productItems, addToCart } = useMain();

  return (
    <section className="flash">
      <div className="container">
        <div className="heading f_flex">
          {/* <i className="fa fa-bolt" /> */}
          <img src="/assets/icons/thunder.svg" alt="bolt icon" />
          <h1>Flash Deals</h1>
        </div>
        <FlashCard productItems={productItems} addToCart={addToCart} />
      </div>
    </section>
  );
}

export default FlashDeals;
