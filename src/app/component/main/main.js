import React from 'react';
import styles from './main.module.css';
import { BsArrowRight } from 'react-icons/bs';

export default function Main() {
  return (
    <section className={styles.section_div}>
      <div className={styles.first}>
        <h3>Classic Exclusive</h3>
        <h1>Woomen Collection</h1>
        <p>UPTO 40% OFF</p>
        <button>
          Shop Now <BsArrowRight />{' '}
        </button>
      </div>
    </section>
  );
}
