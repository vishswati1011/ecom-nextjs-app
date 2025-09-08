import React from 'react';
import { CiHeart } from 'react-icons/ci';
import styles from './page.module.css';
import { findProductById } from '../../../services/product';
import ProductDetails from '../../component/product/product_details';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import ReviewForm from '../../component/customer_review/addYourReview';
export default async function Details({ params }) {
  let product = await findProductById(params.id);

  return (
    <div className={styles.shop_details}>
      <div className={styles.product_details}>
        <div className={styles.product}>
          <div
            className={styles.productImage}
            style={{ backgroundImage: `url(/${product.imageUrl})` }}
          ></div>
          <div className={styles.details}>
            <h3>{product.name}</h3>
            <p className={styles.star}>
              {' '}
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />{' '}
            </p>
            <p className={styles.price}>{product.price} </p>
            <p className={styles.description}>
              Barbie Girls Midi/Knee Length Casual Dress (Pink, Half Sleeve)
            </p>

            <p>Color</p>
            <ul className={styles.list}>
              <li>
                <div className={styles.color_div} style={{ backgroundColor: 'red' }}></div>
              </li>
              <li>
                <div className={styles.color_div} style={{ backgroundColor: 'blue' }}></div>
              </li>
              <li>
                <div className={styles.color_div} style={{ backgroundColor: 'green' }}></div>
              </li>
              <li>
                <div className={styles.color_div} style={{ backgroundColor: 'yellow' }}></div>
              </li>
              <li>
                <div className={styles.color_div} style={{ backgroundColor: 'black' }}></div>
              </li>
              <li>
                <div className={styles.color_div} style={{ backgroundColor: 'orange' }}></div>
              </li>
            </ul>

            <p>Size</p>

            <ul className={styles.list}>
              <li>
                <div className={styles.size}>S</div>
              </li>
              <li>
                <div className={styles.size}>M</div>
              </li>
              <li>
                <div className={styles.size}>L</div>
              </li>
              <li>
                <div className={styles.size}>XL</div>
              </li>
              <li>
                <div className={styles.size}>XXL</div>
              </li>
            </ul>

            <ul className={styles.list}>
              <li className={styles.add_minus}>
                {' '}
                <FaMinus size={10} className={styles.icon} /> &nbsp; 1 &nbsp;{' '}
                <FaPlus size={10} />{' '}
              </li>
              <li className={styles.add_cart}>Add to cart</li>
              <li className={styles.size}>
                {' '}
                <CiHeart />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ProductDetails />
      <ReviewForm />
    </div>
  );
}
