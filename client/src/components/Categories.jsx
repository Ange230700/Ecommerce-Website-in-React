import data from "../services/CategoryData";

function Categories() {
  return (
    <div className="category">
      {data.map((value) => (
        <div className="box f_flex" key={value.id}>
          <img
            // src={`${import.meta.env.VITE_API_URL}/${value.cateImg}`}
            src={`/assets/${value.cateImg}`}
            alt="category pic"
          />
          <span>{value.cateName}</span>
        </div>
      ))}
    </div>
  );
}

export default Categories;
