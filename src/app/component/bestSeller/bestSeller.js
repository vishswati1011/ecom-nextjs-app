import React from 'react';
import Card from '../../modal/priceCard/cardWithPrice';
import { sellerData } from '../../util/seller';
import styles from './bestSeller.module.css';

export default function category() {
  return (
    <div className={styles.category_div}>
      <div className={styles.title}>
        <p>Our BestSeller</p>
      </div>
      <div className={styles.cards}>
        {sellerData.map((category) => (
          <Card key={category.id} item={category} />
        ))}
      </div>
    </div>
  );
}
