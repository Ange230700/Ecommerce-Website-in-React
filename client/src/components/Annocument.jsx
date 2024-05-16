function Annocument() {
  const mystyle = {
    width: "30%",
    height: "340px",
  };
  const mystyle1 = {
    width: "68%",
    height: "340px",
  };
  return (
    <section className="annocument background">
      <div className="container d_flex">
        <div className="img" style={mystyle}>
          <img
            src={`${import.meta.env.VITE_APP_URL}/images/banner-1.png`}
            alt="banner pic"
            width="100%"
            height="100%"
          />
        </div>
        <div className="img" style={mystyle1}>
          <img
            src={`${import.meta.env.VITE_APP_URL}/images/banner-2.png`}
            alt="banner pic"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </section>
  );
}

export default Annocument;
