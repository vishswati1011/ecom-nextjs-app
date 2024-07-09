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

          <h5>Free Shipping</h5>
          <p>Free shipping for order above $150</p>
        </div>

        <div className={styles.grid}>
          <CgDollar size={25}/>
          <h5>Money Guarantee</h5>
          <p>Within 30 days for an exchnage</p>
        </div>


        <div className={styles.grid}>
        <GiTimeBomb size={25}/>

          <h5>Online Support</h5>
          <p>24 hours a day, 7 days a week</p>
        </div>

        <div className={styles.grid}>
        <MdOutlinePayment size={25}/>

          <h5>Flexible Payment</h5>
          <p>Pay with multiple credit cards</p>
        </div>

      </div>
  );
}
