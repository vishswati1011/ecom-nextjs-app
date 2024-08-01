"use client";
import React ,{useState} from "react";
import styles from "./page.module.css";
import TotalPrice from "../component/shop_delivery/totalPrice";
import ShopAddressForm from '../component/shop_delivery/address';
import PaymentCard from '../component/shop_delivery/payment';
import ReviewForm from '../component/shop_delivery/review';

export default function ShopAddressing() {
  const [key, setKey] = useState("payment");

  return (
    <div className={styles.container}>
      <h3>Shopping Address</h3>

      <div className={styles.shopping_container}>
        <div className={styles.checkout_div}>
          <nav className={styles.steps}>
            <div className={`${styles.step}`} onClick={()=>setKey("address")}>
              <span className={styles.icon}>🏠</span>
              <span className={styles.label}>Address</span>
            </div>
            <div className={styles.line} />
            <div className={`${styles.step}`} onClick={()=>setKey("payment")}>
              <span className={styles.icon}>💳</span>
              <span className={styles.label}>Payment</span>
            </div>
            <div className={styles.line} />
            <div className={`${styles.step}`} 
            // onClick={()=>setKey("review")}
            >
              <span className={styles.icon}>📝</span>
              <span className={styles.label}>Review</span>
            </div>
          </nav>
        {key==='address' ? <ShopAddressForm/> : key==="payment" ?<PaymentCard/> : <ReviewForm/>}
    

        </div>
        <TotalPrice />
      </div>
    </div>
  );
}
