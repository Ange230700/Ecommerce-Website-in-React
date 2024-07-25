import TopCart from "./TopCart";

function TopCate() {
  return (
    <section className="TopCate background">
      <div className="container">
        <div className="heading d_flex">
          <div className="heading-left row  f_flex">
            {/* <i className="fa-solid fa-border-all" /> */}
            <img src="/assets/icons/border-all.svg" alt="Top categories" />
            <h2>Top Categories</h2>
          </div>
          <div className="heading-right row ">
            <span>View all</span>
            {/* <i className="fa-solid fa-caret-right" /> */}
            <img className="view-all-icon" src="/assets/icons/caret.svg" alt="view all" />
          </div>
        </div>
        <TopCart />
      </div>
    </section>
  );
}

export default TopCate;
