function Head() {
  return (
    <section className="head">
      <div className="container d_flex">
        <div className="left row">
          <i className="fa fa-phone" />
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" defaultValue="+88012 3456 7894" />
          <i className="fa fa-envelope" />
          <label htmlFor="e-mail">Email</label>
          <input type="email" id="e-mail" defaultValue="support@ui-lib.com" />
        </div>
        <div className="right row RText">
          <label htmlFor="FAQ">Theme FAQ"s</label>
          <label htmlFor="help">Need Help?</label>
          <span>🏳️‍⚧️</span>
          <label htmlFor="lang">EN</label>
          <span>🏳️‍⚧️</span>
          <label htmlFor="currency">USD</label>
        </div>
      </div>
    </section>
  );
}

export default Head;
