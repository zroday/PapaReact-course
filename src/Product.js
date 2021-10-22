import React from "react";
import ItemDescription from "./ItemDescription";

function Product(props) {
  return (
    <div>
      <ItemDescription name={props.name} description={props.description} />
      <h3>${props.price}</h3>
    </div>
  );
}

export default Product;
