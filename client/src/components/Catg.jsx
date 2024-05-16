import data from "../services/Cdata";

function Catg() {
  return (
    <div className="category">
      <div className="chead d_flex">
        <h1>Brands </h1>
        <h1>Shops </h1>
      </div>
      {data.map((value) => (
        <div className="box f_flex" key={value.id}>
          <img
            src={`${import.meta.env.VITE_APP_URL}/${value.cateImg}`}
            alt=""
          />
          <span>{value.cateName}</span>
        </div>
      ))}
      <div className="box box2">
        <button type="button">View All Brands</button>
      </div>
    </div>
  );
}

export default Catg;
