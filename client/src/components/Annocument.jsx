function Annocument() {
  const mystyle = {
    width: "30%",
    height: "340px",
    objectFit: "cover",
  };
  const mystyle1 = {
    width: "68%",
    height: "340px",
    objectFit: "cover",
  };
  return (
    <section className="annocument background">
      <div className="container d_flex">
        <div className="img" style={mystyle}>
          <img
            // src={`${import.meta.env.VITE_API_URL}/images/banner-1.png`}
            // src="/client/src/assets/images/banner-1.png"
            src="/assets/images/banner-1.png"
            alt="banner pic"
            width="100%"
            height="100%"
          />
        </div>
        <div className="img" style={mystyle1}>
          <img
            // src={`${import.meta.env.VITE_API_URL}/images/banner-2.png`}
            // src="/client/src/assets/images/banner-2.png"
            src="/assets/images/banner-2.png"
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
