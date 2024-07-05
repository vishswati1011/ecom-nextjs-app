import React from "react";
import BestSeller from "../../modal/priceCard/cardWithPrice";
import { shopData } from "../../util/shop";
import styles from "./shop.module.css";
import { BsFilterSquare } from "react-icons/bs";
import { BsGrid } from "react-icons/bs";
import { GoChevronDown } from "react-icons/go";
import { RiArrowUpSLine } from "react-icons/ri";
import { HiPlusSmall } from "react-icons/hi2";

export default function Shop() {
  return (
    <div className={styles.category_div}>
      <div className={styles.title}>
        <p><BsGrid size={15} className={styles.icon}/> <BsFilterSquare className={styles.icon} size={15}/> Showing 1-16 of 72 results</p>
        <p>  Sort by latest  <GoChevronDown size={15}/> </p>
      </div>
      <div className={styles.cards}>
        {shopData.map((category) => (
          <BestSeller key={category.id} item={category} />
        ))}
      </div>    
    </div>
  );
}
