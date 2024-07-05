import React from "react";
import { insta } from "../../util/insta";
import styles from "./instagram.module.css";
import Image from 'next/image'
import { MdOutlinePayment } from "react-icons/md";
import { GiTimeBomb } from "react-icons/gi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { CgDollar } from "react-icons/cg";

export default function category() {
  return (
    <div className={styles.category_div}>
      <div className={styles.title}>
        <p>Our Instagram Stories</p>
      </div>
      <div className={styles.cards}>
        {insta.map((category) => (
            <Image src={`/${category.imageUrl}`} alt={category.name} width={250} height={250} key={category.id}/>
        ))}
      </div>

    </div>
  );
}
