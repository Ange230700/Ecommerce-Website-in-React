import Dcard from "./Dcard";

function Discount() {
  return (
    <section className="Discount background NewArrivals">
      <div className="container">
        <div className="heading d_flex">
          <div className="heading-left row  f_flex">
            <img
              src="https://img.icons8.com/windows/32/fa314a/gift.png"
              alt="discount pic"
            />
            <h2>Big Discounts</h2>
          </div>
          <div className="heading-right row ">
            <span>View all</span>
            {/* <i className="fa-solid fa-caret-right" /> */}
            <img
              className="view-all-icon"
              src="/assets/icons/caret.svg"
              alt="view all"
            />
          </div>
        </div>
        <Dcard />
      </div>
    </section>
  );
}

export default Discount;
