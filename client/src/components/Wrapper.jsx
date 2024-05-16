import data from "../services/Wdata";

function Wrapper() {
  return (
    <section className="wrapper background">
      <div className="container grid2">
        {data.map((val) => (
          <div className="product" key={val.id}>
            <div className="img icon-circle">
              <img
                src={`${import.meta.env.VITE_APP_URL}/${val.cover}`}
                alt="product pic"
              />
            </div>
            <h3>{val.title}</h3>
            <p>{val.decs}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Wrapper;
