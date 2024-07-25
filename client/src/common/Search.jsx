import { Link } from "react-router-dom";
import { useMain } from "../contexts/MainContext";

function Search() {
  const { CartItem } = useMain();

  // fixed Header
  window.addEventListener("scroll", () => {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });

  return (
    <section className="search">
      <div className="container c_flex">
        <div className="logo width">
          <img
            // src={`${import.meta.env.VITE_API_URL}/`}
            src="/assets/icons/logo.svg"
            alt="logo"
          />
        </div>

        <div className="search-box f_flex">
          {/* <i className="fa fa-search" /> */}
          <img src="/assets/icons/loupe.svg" alt="search pic" />
          <input type="text" placeholder="Search and hit enter..." />
          <span>All Category</span>
        </div>

        <div className="icon f_flex width">
          <div>
            {/* <i className="fa fa-user icon-circle" /> */}
            <img
              className="icon-circle"
              src="/assets/icons/profile-user.svg"
              alt="profile pic"
            />
          </div>
          <Link className="cart" to="/cart">
            {/* <i className="fa fa-shopping-bag icon-circle" /> */}
            <img
              className="icon-circle"
              src="/assets/icons/shopping-bag.svg"
              alt="shopping bag pic"
            />
            <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Search;
