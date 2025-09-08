import React from 'react';
import Card from '../../modal/card/card';
import { categoryData } from '../../util/category';
import styles from './category.module.css';
import { BsArrowRightSquareFill } from 'react-icons/bs';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';

export default function category() {
  return (
    <div className={styles.category_div}>
      <div className={styles.title}>
        <p>Shop by Categories</p>
        <ul>
          <li>
            <BsFillArrowLeftSquareFill className={styles.icon_size} size={30} />
          </li>
          <li>
            <BsArrowRightSquareFill className={styles.icon_size} size={30} />
          </li>
        </ul>
      </div>
      <div className={styles.cards}>
        {categoryData.map((category) => (
          <Card key={category.id} item={category} />
        ))}
      </div>
    </div>
  );
}
