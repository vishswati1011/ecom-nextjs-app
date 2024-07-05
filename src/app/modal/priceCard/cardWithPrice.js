import React from 'react'
import styles from './cardPrice.module.css'
import { CiHeart } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import Link from 'next/link';

export default function Card(item ) {
  const {name, imageUrl,price} = item.item
  return (
    <div className={styles.card}>
      <Link href="/shop/[id]" as={`/shop/${item.item.id}`} className={styles.link}>
        <div className={styles.card_image} style={{backgroundImage: `url(/${imageUrl})`}}>
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
        <ul className={styles.price}><li className={styles.discount}>{price}</li><li className={styles.actual}>$ 40.00</li></ul>
        </Link>
    </div>
  )
}