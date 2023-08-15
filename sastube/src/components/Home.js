import React, { useState } from 'react'
//import main from '../components/main.jpg'
import v from '../components/Array'
export default function Home(props) {
    const[val,setval]=useState({
      productname:'',
      productimg:'',
      price:0
    })
    const fun1=(val1)=>{
      fetch('/insertproductinfo',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'user':props.user
        },
        body:JSON.stringify(val1)
      }).then((data)=> {return data.json()}).then((data)=>{window.alert(data.mess)}).catch((err)=>{console.log(err)});
   }
  const fun=(product)=>{
    return(
      <div className="product">
      <img src={product.productimg} alt="error"/>
     <div className="product-info">
     <p className="description">{product.productname}</p>
       <p className="price">{product.price.toFixed(2)}</p>
       {( props.valid && <button className="add-to-cart-btn" onClick={()=>{fun1(product)}}>Add to Cart</button>)}
       <p className="review">4.5 stars(100 reviews)</p>
       
     </div>
   </div>
    )
  }
  return (
     <div className="home1">
       {v.map(fun)}
     </div>
  )
}