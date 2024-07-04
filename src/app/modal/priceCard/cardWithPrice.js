import React from 'react'
import styles from './cardPrice.module.css'
import { CiHeart } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
export default function Card(item ) {
  const {name, imageUrl} = item.item
  return (
    <div className={styles.card}>
        <div className={styles.card_image} style={{backgroundImage: `url(${imageUrl})`}}>
        <ul>
        <li>
            <CiStar size={25} />
          </li>
          <li>
            <CiHeart size={25} />
          </li>
          <li>
            <IoEyeOutline size={25} />
          </li>
             </ul>
        <button className={styles.card_btn}>Add to Cart</button>
        </div>
        <p className={styles.name}>{name}</p>
        <span className={styles.desc}>Printed Cotton T-Shirt</span>
        <ul className={styles.price}><li className={styles.discount}>$ 38.00</li><li className={styles.actual}>$ 40.00</li></ul>
    </div>
  )
}