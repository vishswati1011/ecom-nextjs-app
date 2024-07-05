import React from 'react'
import styles from './card.module.css'
import Link from 'next/link'

export default function Card(item ) {
  const {name, imageUrl,id} = item.item
  return (
    <Link href="/shop/[id]" as={`/shop/${id}`} className={styles.link}>
    <div className={styles.card} style={{backgroundImage: `url(/${imageUrl})`}}>
        <button className={styles.card_btn}>{name}</button>
    </div>
    </Link>
  )
}