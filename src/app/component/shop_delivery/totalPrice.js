import React from 'react'
import styles from './totalPrice.module.css'
import Link from 'next/link';

export default function TotalPrice() {
  return (
    <div className={styles.total_price}>
    <div className={styles.sub_total}>
      <span className={styles.title}><b>Subtotal</b></span>
      <span>$ 200.00</span>
    </div>
    <span className={styles.text_muted}>Enter Discount Code</span>
    <input type="text" className={styles.input} placeholder="Enter here..." />
    <button className={styles.checkout_btn}>Apply</button>
    <div className={styles.sub_total}>
      <span>Delivery Charges</span>
      <span>$ 5.00</span>
    </div>
    <div className={styles.sub_total}>
      <span>Grand Total</span>
      <span>$ 5.00</span>
    </div>
    <Link href="/shop-address">
    <button className={styles.checkout_btn}>Checkout</button>
    </Link>
  </div>
  )
}
