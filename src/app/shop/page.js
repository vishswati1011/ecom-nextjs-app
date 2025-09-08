import React from 'react';
import Filter from '../modal/filter/filter';
import styles from './page.module.css';
import Support from '../component/support/support';
import BestSeller from '../modal/priceCard/cardWithPrice';
import { shopData } from '../util/shop';
import { BsGrid } from 'react-icons/bs';
import { GoChevronDown } from 'react-icons/go';
export default function ShopPage() {
  return (
    <div>
      <div className={styles.shop_page}>
        <div className={styles.filter_div}>
          <Filter />
        </div>
        <div className={styles.shop_div}>
          <div className={styles.title}>
            <p>
              <BsGrid size={15} className={styles.icon} />
              Showing 1-16 of 72 results
            </p>
            <p>
              {' '}
              Sort by latest <GoChevronDown size={15} />{' '}
            </p>
          </div>
          <div className={styles.cards}>
            {shopData.map((category) => (
              <BestSeller key={category.id} item={category} />
            ))}
          </div>
        </div>
      </div>
      <Support />
    </div>
  );
}
