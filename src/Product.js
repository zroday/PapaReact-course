import React from "react";
import ItemDescription from "./ItemDescription";
import styles from "./Product.module.css";

function Product(props) {
  return (
    <div className={styles.product}>
      <ItemDescription name={props.name} description={props.description} />
      <h2 className={styles.product__error}>An error occured</h2>
      <h3 className={styles.price}>${props.price}</h3>
    </div>
  );
}

export default Product;
