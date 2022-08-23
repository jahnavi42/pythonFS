import React from 'react';
export default function Card(){
    return (<div className="App">
    <div className="card-border">
        <img src="sweatshirt.webp" className="sweatshirt" alt="images"/>
        <p className="title">Black Fantasy Sweatshirt</p>
      
      <span className="vertical-align">
        <p className="title-bold">Price</p>
        <p className="title-Normal">200$</p>
      </span>
      <span className="cart-container">
        <img src="cart.jpg" alt="cart" className="cart-icon"/>
      </span>

    </div>
    
  </div>);
}