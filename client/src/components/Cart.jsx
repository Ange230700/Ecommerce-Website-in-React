import Ndata from "../services/Ndata";

function Cart() {
  return (
    <div className="content grid product">
      {Ndata.map((val) => (
        <div className="box" key={val.id}>
          <div className="img">
            <img
              // src={`${import.meta.env.VITE_API_URL}/${val.cover} `}
              src={`/assets/${val.cover} `}
              alt="Cart pic"
            />
          </div>
          <h4>{val.name}</h4>
          <span>${val.price}</span>
        </div>
      ))}
    </div>
  );
}

export default Cart;
