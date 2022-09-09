import React from "react";
import "./styles.css";

export default function TopNavBar(props) {
  const { onSearchChange, cartToolTip = 0 } = props;
  return (
    <div className="TopNavBar-container">
      <p className="TopNavBar-title">Ecom-Store</p>
      <input
        type="text"
        className="TopNavBar-search"
        placeholder="Search"
        onChange={(e) => onSearchChange(e.target.value)}
      />
      
    </div>
  );
}
