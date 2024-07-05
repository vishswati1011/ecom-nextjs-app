import React from "react";
import styles from "./support.module.css";
import { MdOutlinePayment } from "react-icons/md";
import { GiTimeBomb } from "react-icons/gi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { CgDollar } from "react-icons/cg";

export default function category() {
  return (

      <div className={styles.grids}>

        <div className={styles.grid}>
        <MdOutlineLocalShipping size={25}/>

          <h4>Free Shipping</h4>
          <p>Free shipping for order above $150</p>
        </div>

        <div className={styles.grid}>
          <CgDollar size={25}/>
          <h4>Money Guarantee</h4>
          <p>Within 30 days for an exchnage</p>
        </div>


        <div className={styles.grid}>
        <GiTimeBomb size={25}/>

          <h4>Online Support</h4>
          <p>24 hours a day, 7 days a week</p>
        </div>

        <div className={styles.grid}>
        <MdOutlinePayment size={25}/>

          <h4>Flexible Payment</h4>
          <p>Pay with multiple credit cards</p>
        </div>

      </div>
  );
}
