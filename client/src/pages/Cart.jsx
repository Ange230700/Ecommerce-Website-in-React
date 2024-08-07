import { useMain } from "../contexts/MainContext";

function Cart() {
  const { CartItem, addToCart, decreaseQty } = useMain();

  // Stpe: 7   calucate total of items
  const totalPrice = CartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  // prodcut qty total
  return (
    <section className="cart-items">
      <div className="container d_flex">
        {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

        <div className="cart-details">
          {CartItem.length === 0 && (
            <h1 className="no-items product">No Items are added in Cart</h1>
          )}

          {/* yasma hami le cart item lai display garaaxa */}
          {CartItem.map((item) => {
            const productQty = item.price * item.qty;

            return (
              <div className="cart-list product d_flex" key={item.id}>
                <div className="img">
                  <img src={`/assets/${item.cover}`} alt="" />
                </div>
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <h4>
                    ${item.price}.00 * {item.qty}
                    <span>${productQty}.00</span>
                  </h4>
                </div>
                <div className="cart-items-function">
                  <div className="removeCart">
                    <button
                      type="button"
                      className="removeCart"
                      aria-label="remove cart"
                    >
                      <i className="fa-solid fa-xmark" />
                    </button>
                  </div>
                  {/* stpe: 5 
                    product ko qty lai inc ra des garne
                    */}
                  <div className="cartControl d_flex">
                    <button
                      type="button"
                      className="incCart"
                      onClick={() => addToCart(item)}
                      aria-label="Increment"
                    >
                      {/* <i className="fa-solid fa-plus" /> */}
                      <img src="/assets/icons/add.svg" alt="plus" />
                    </button>
                    <button
                      type="button"
                      className="desCart"
                      onClick={() => decreaseQty(item)}
                      aria-label="Decrement"
                    >
                      {/* <i className="fa-solid fa-minus" /> */}
                      <img src="/assets/icons/minimize-sign.svg" alt="minus" />
                    </button>
                  </div>
                </div>

                <div className="cart-item-price" />
              </div>
            );
          })}
        </div>

        <div className="cart-total product">
          <h2>Cart Summary</h2>
          <div className=" d_flex">
            <h4>Total Price :</h4>
            <h3>${totalPrice}.00</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
