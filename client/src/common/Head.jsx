import { Link } from "react-router-dom";

function Head() {
  return (
    <section className="head">
      <div className="container d_flex">
        <div className="left row contact-info-container">
          <div className="contact-info">
            {/* <i className="fa fa-phone" /> */}
            <img src="/assets/icons/phone-call.svg" alt="phone" />
            {/* <label htmlFor="phone">Phone</label> */}
            <a href="tel:+8801234567894">+88012 3456 7894</a>
          </div>
          <div className="contact-info">
            {/* <i className="fa fa-envelope" /> */}
            <img src="/assets/icons/mail.svg" alt="Email" />
            {/* <label htmlFor="e-mail">Email</label> */}
            <a href="mailto:support@ui-lib.com">support@ui-lib.com</a>
          </div>
        </div>
        <div className="right row RText contact-info-container">
          <div className="contact-info">
            <Link to="/faq">Theme FAQ's</Link>
          </div>
          <div className="contact-info">
            <Link to="/help">Need Help?</Link>
          </div>
          <div className="contact-info">
            {/* <span>🏳️‍⚧️</span> */}
            <img src="/assets/icons/language.svg" alt="language" />
            <label htmlFor="lang">EN</label>
          </div>
          <div className="contact-info">
            {/* <span>🏳️‍⚧️</span> */}
            <img src="/assets/icons/currency.svg" alt="currency" />
            <label htmlFor="currency">USD</label>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Head;
