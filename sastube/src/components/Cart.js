import React, { useState } from 'react';

export default function Cart(props) {
  const [val1, setval1] = useState(0);
  const [data, setdata] = useState(props.data);
  let t = 0;

  const fun = (val) => {
    { t += val.price };
    return (
      <div className="list">
        <img src={val.productimg} alt="error" />
        <div className="content">
          <div className="info">
            <h3>{val.productname}</h3>
          </div>
          <div className="price">
            <h3>{val.price}</h3>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="cart">
      <h1>Cart</h1>
      <div className="item">
        {data.map(fun)}

        {data.length > 0 && (
          <div className="details">
            <div className="subtotal">
              <div className="name">
                <h2>Subtotal:</h2>
              </div>
              <div className="price">
                <h2>{t}</h2>
              </div>
            </div>
            <div className="subtotal">
              <div className="name">
                <h2>Shipping:</h2>
              </div>
              <div className="price">
                <h2>80.00</h2>
              </div>
            </div>
            <div className="subtotal">
              <div className="name">
                <h2>Total:</h2>
              </div>
              <div className="price">
                <h2>{t + 80}</h2>
              </div>
            </div>
          </div>
        )}

        <button>
          <h2>PROCEED TO CHECKOUT</h2>
        </button>
      </div>
    </div>
  );
}
