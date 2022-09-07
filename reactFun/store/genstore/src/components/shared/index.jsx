import React from "react";
import "./styles.css";

export default function TopNavBar(props) {
  const { onSearchChange, cartToolTip = 0 } = props;
  return (
    <div className="TopNavBar-container">
      <p className="TopNavBar-title">General-Store</p>
      <input type="text" className="TopNavBar-search" placeholder="Search" />
      <span className="TopNavBar-icon-cont">
        <img src="cart.webp" className="TopNavTabIcon" alt="" />
        {cartToolTip > 0 && <span className="TopNav-tooltip">{cartToolTip}</span>}
      </span>
      <span className="TopNavBar-icon-cont">
        <img src="profile.webp" className="TopNavTabIcon" alt="" />
      </span>
      <div className="producttitle"> 
      </div>
    </div>
  );
}