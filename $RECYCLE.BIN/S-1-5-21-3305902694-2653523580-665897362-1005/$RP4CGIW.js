import React from 'react';
import './App.css';
export default function App() {
    return (<div className="App">
        <div className="card-border">
        <img src="blackshirt.webp" className="blackshirt" alt="images"/>
        <p className="title">Black shirt</p>
      
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