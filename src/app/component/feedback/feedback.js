import React from 'react';
import styles from './feedback.module.css';
import { BsArrowRightSquareFill } from 'react-icons/bs';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import Image from 'next/image';
export default function category() {
  return (
    <div className={styles.category_div}>
      <div className={styles.title}>
        <p>What our Customer say&apos;s</p>
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
        <div className={styles.card}>
          <h3>* * * * *</h3>
          <h4>Good Work!</h4>
          <p>
            Lorem Ipsum Dolor Sit Amet. Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A
            Urna Viverra Morbi. Morbi Donec Amet....
          </p>

          <div className={styles.author}>
            <Image src="/images/profile/profile2.jpeg" alt="James Gouse" width={50} height={50} />
            <div className={styles.author_info}>
              <h4>James Gouse</h4>
              <p>Graphic Designer</p>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <h3>* * * * *</h3>
          <h4>Good Work!</h4>
          <p>
            Lorem Ipsum Dolor Sit Amet. Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A
            Urna Viverra Morbi. Morbi Donec Amet....
          </p>

          <div className={styles.author}>
            <Image src="/images/profile/profile3.jpeg" alt="James Gouse" width={50} height={50} />
            <div className={styles.author_info}>
              <h4>James Gouse</h4>
              <p>Graphic Designer</p>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <h3>* * * * *</h3>
          <h4>Good Work!</h4>
          <p>
            Lorem Ipsum Dolor Sit Amet. Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A
            Urna Viverra Morbi. Morbi Donec Amet....
          </p>

          <div className={styles.author}>
            <Image src="/images/profile/profile4.jpeg" alt="James Gouse" width={50} height={50} />
            <div className={styles.author_info}>
              <h4>James Gouse</h4>
              <p>Graphic Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
