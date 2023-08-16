import React, { useState } from "react";
//import main from '../components/main.jpg'
import v from "../components/Array";
export default function Home(props) {
  const [val, setval] = useState({
    productname: "",
    productimg: "",
    price: 0,
  });
  const fun1 = (val1) => {
    fetch("/insertproductinfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        user: props.user,
      },
      body: JSON.stringify(val1),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        window.alert(data.mess);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fun = (product) => {
    return (
      <div className="card mx-3 my-3">
        <img src={product.productimg} alt="error" className="card-img-top" style={{width:"250px", height:"250px"}}/>
        <div className="card-body">
          <p className="card-title" style={{fontSize:"larger"}}><strong>{product.productname}</strong></p>
          <p className="card-text">{product.price}</p>
          {props.valid && (
            <button
              className="add-to-cart-btn"
              onClick={() => {
                fun1(product);
              }}
            >
              Add to Cart
            </button>
          )}
          <p className="card-text my-2">⭐⭐⭐⭐</p>
        </div>
      </div>
    );
  };
  return <div className="home1">{v.map(fun)}</div>;
}
