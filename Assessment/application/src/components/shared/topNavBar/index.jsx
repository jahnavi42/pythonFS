import React, { useEffect } from "react";
import "./styles.css";
import CartImage from "../../../assets/images/cart.jpg";
import ProfileImage from "../../../assets/images/profile.webp";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import HomeIcon from "../../../assets/images/home.png";
import ClothesIcon from "../../../assets/images/clothes.webp";
import PhoneIcon from "../../../assets/images/phone.webp";
import SearchIcon from "../../../assets/images/search.webp";

export default function TopNavBar(props) {
  const { onSearchChange, cartToolTip = 0 } = props;
  const navigate = useNavigate();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  function renderCompoent() {
    if (isTabletOrMobile) {
      return (
        <div className="TopNavBar-container-mobile">
          <span
            style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
            onClick={() => navigate("/")}
          >
            <img src={HomeIcon} alt="home" className="tocomo-icon" />
            <span className="tocomo-title">home</span>
          </span>
          <span
            style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
            onClick={() => navigate("/clothes")}
          >
            <img src={ClothesIcon} alt="home" className="tocomo-icon" />
            <span className="tocomo-title">Clothes</span>
          </span>
          <span
            style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
            onClick={() => navigate("/mobile")}
          >
            <img src={PhoneIcon} alt="home" className="tocomo-icon" />
            <span className="tocomo-title">phone</span>
          </span>
          <span style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <img src={SearchIcon} alt="home" className="tocomo-icon" />
            <span className="tocomo-title">search</span>
          </span>
        </div>
      );
    } else {
      return (
        <div className="TopNavBar-container">
          <p className="TopNavBar-title" onClick={() => navigate("/")}>
            General-Store
          </p>
          <input
            type="text"
            className="TopNavBar-search"
            placeholder="Search"
            onChange={(e) => onSearchChange(e.target.value)}
          />
          {/* navigation tabs  */}
          <span className="navigation-text" onClick={() => navigate("/mobile")}>
            Mobile
          </span>
          <span className="navigation-text" onClick={() => navigate("/clothes")}>
            Clothes
          </span>
          <span className="TopNavBar-icon-cont">
            <img src={CartImage} className="TopNavTabIcon" alt="" />
            {cartToolTip > 0 && <span className="TopNav-tooltip">{cartToolTip}</span>}
          </span>
          <span className="TopNavBar-icon-cont">
            <img src={ProfileImage} className="TopNavTabIcon" alt="" />
          </span>
        </div>
      );
    }
  }

  return renderCompoent();
}
