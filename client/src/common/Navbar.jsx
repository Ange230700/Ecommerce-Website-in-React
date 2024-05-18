import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="header">
      <div className="container d_flex">
        <div className="catgrories d_flex">
          {/* <span className="fa-solid fa-border-all" /> */}
          <img src="/assets/icons/category.svg" alt="category" />
          <h4>Categories {/* <i className="fa fa-chevron-down" /> */}</h4>
          <img src="/assets/icons/chevron.svg" alt="chevron" />
        </div>

        <div className="navlink">
          <ul
            className={
              MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
            }
          >
            {/* <ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'> */}
            {/* {[
              "home",
              "pages",
              "user account",
              "vendor account",
              "track my order",
              "contact",
            ].map((link) => {
              const href = link.split(" ")[0]; // Split the string on spaces and take the first word
              return (
                <li key={link}>
                  <Link to={`/${href}`} onClick={() => setMobileMenu(false)}>
                    {link}
                  </Link>
                </li>
              );
            })} */}
            <li>
              <Link to="/">pages</Link>
            </li>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/">user account</Link>
            </li>
            <li>
              <Link to="/">vendor account</Link>
            </li>
            <li>
              <Link to="/">track my order</Link>
            </li>
            <li>
              <Link to="/">contact</Link>
            </li>
          </ul>

          <button
            type="button"
            className="toggle"
            onClick={() => setMobileMenu(!MobileMenu)}
          >
            {MobileMenu ? (
              <i className="fas fa-times close home-btn" />
            ) : (
              <i className="fas fa-bars open" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
