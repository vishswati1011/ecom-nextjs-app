import React from "react";
import styles from "./page.module.css";
import { categoryData } from "../util/category";
import Image from "next/image";

export default function Checkout() {
  return (
    <div className={styles.container}>
      <h3>Checkout</h3>
      <div className={styles.checkout_div}>
        <table className={styles.list}>
          <thead>
            <tr>
              <th>S No.</th>
              <th>Image</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {categoryData.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <Image
                    src={`/${item.imageUrl}`}
                    alt={item.name}
                    width={50}
                    height={50}
                    className={styles.image}
                  />
                </td>
                <td>{item.name}</td>
                <td>2</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.total_price}>
          <div className={styles.sub_total}>
            <span className={styles.title}><b>Subtotal</b></span>
            <span>$ 200.00</span>
          </div>
          <span className={styles.text_muted}>Enter Discount Code</span>
          <button className={styles.checkout_btn}>Apply</button>
          <div className={styles.sub_total}>
            <span>Delivery Charges</span>
            <span>$ 5.00</span>
          </div>
          <div className={styles.sub_total}>
            <span>Grand Total</span>
            <span>$ 5.00</span>
          </div>
          <button className={styles.checkout_btn}>Checkout</button>
        </div>
      </div>
    </div>
  );
}
