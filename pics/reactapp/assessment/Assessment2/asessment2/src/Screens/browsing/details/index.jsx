import React from "react";
import { Cart, ProductDetail } from "../../../components";
import "./styles.css";
import { useSelector } from "react-redux";
export default function Detail(props) {
  const count = useSelector((store) => store.counter);
  const { title ,detailing} = props;

  return (
    <div className="product-detail">
      <ProductDetail
       
        thatitem={title}
        ident={title.id}
      />
      <p>Suggestion</p>
      <div className="Product-Window">
        {(count.search.length === 0
          ? count.listOfAllObject
          : count.listOfAllObject.filter((item) =>
              item.type.includes(count.search)
            )
        ).map((item) => {
          return <Cart detailing={detailing} ident={item.id} thatitem={item} />;
        })}
      </div>
    </div>
  );
}