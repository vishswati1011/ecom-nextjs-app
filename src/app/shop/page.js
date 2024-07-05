import React from "react";
import Filter from "../modal/filter";
import Shop from "../component/shop/shop";
import styles from "./page.module.css";
import Support from "../component/support/support";
export default function ShopPage() {
  return (
    <div className={styles.shop_page}>
      <div className={styles.filter}>
        <Filter />
      </div>
      <div className={styles.shop_div}>
        <Shop />
      </div>
    </div>
  );
}
