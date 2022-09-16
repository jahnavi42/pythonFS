import React from "react";
import "./styles.css";
import { Cart } from "../../../components";
import { useSelector } from "react-redux";
export default function Carts(props) {

  const {detailing} = props;

  const count = useSelector((asessment2) => asessment2.counter);
  return (
    <div className="">
      {count.listOfCartObject.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        count.listOfCartObject.map((item) => {
          return (
            <Cart
              thatitem={item}
              detailing={detailing}
              ident={item.id}
            />
          );
        })
      )}
    </div>
  );
}