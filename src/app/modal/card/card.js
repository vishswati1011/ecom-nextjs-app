import React from 'react'
import styles from './card.module.css'

export default function Card(item ) {
  const {name, imageUrl} = item.item
  return (
    <div className={styles.card} style={{backgroundImage: `url(${imageUrl})`}}>
        <button className={styles.card_btn}>{name}</button>
    </div>
  )
}