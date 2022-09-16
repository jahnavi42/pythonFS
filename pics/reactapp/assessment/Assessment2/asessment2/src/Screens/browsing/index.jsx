import React, { useState } from "react";
import { Cart, NavBar } from "../../components";
import "./styles.css";

import { Route } from "react-router-dom";
import MobileScreen from "./mobilescreen";
import Detail from "./details";
import ClothScreen from "./clothesscreen";
import { Routes } from "react-router-dom";
import Carts from "./cart";
import { useSelector} from "react-redux";

export default function Browsing(props) {
  const [det, setdet] = useState();
  const detailing = (product) => {
    setdet(product);
  };

  const count = useSelector((asessment2) => asessment2.counter);

  return (
    <div className="Browsing-Window">
      <NavBar className="over" />
      <div className="loading-container">
        <Routes>
          <Route
            path="/"
            element={
              <div className="Product-Window">
                {(count.search.length === 0
                  ? count.listOfAllObject
                  : count.listOfAllObject.filter((item) =>
                      item.type.includes(count.search)
                    )
                ).map((item) => {
                  return (
                    <Cart
                      thatitem={item}
                      detailing={detailing}
                      ident={item.id}
                    />
                  );
                })}
              </div>
            }
          />
          <Route
            path="/mobilescreen"
            element={<MobileScreen detailing={detailing} />}
          />
          <Route
            path="/clothesscreen"
            element={<ClothScreen detailing={detailing} />}
          />
          <Route
            path="/details"
            element={<Detail title={det} detailing={detailing} />}
          />
          <Route path="/cart" element={<Carts detailing={detailing} />} />
        </Routes>
      </div>
    </div>
  );
}