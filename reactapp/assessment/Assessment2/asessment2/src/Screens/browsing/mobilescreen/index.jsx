import React from "react";
import { Cart } from "../../../components";

import "./styles.css";
import { useSelector } from "react-redux";
export default function MobileScreen(props) {
  const count = useSelector((asessment2) => asessment2.counter);
  const { detailing,handleproduct} = props;
 
  return (
    <div className="mobile-section-container">
      <div className="section-m-con1">
        <h3>Oppo</h3>
        <div className="horizonal-scrolling">
          {(count.search.length === 0
            ? count.listOfOppoObject
            : count.listOfOppoObject.filter((item) =>
                item.item2.includes(count.search)
              )
          ).map((item) => {
            return (
              <Cart
                thatitem={item}
                detailing={detailing}
                handleproduct1={handleproduct}
                ident={item.id}
              />
            );
          })}
        </div>
      </div>

      <div className="section-m-con1">
        <h3>oppo</h3>
        <div className="horizonal-scrolling">
          {(count.search.length === 0
            ? count.listOfOppoObject
            : count.listOfOppoObject.filter((item) =>
                item.item2.includes(count.search)
              )
          ).map((item) => {
            return (
              <Cart
                thatitem={item}
                detailing={detailing}
                handleproduct1={handleproduct}
                ident={item.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}