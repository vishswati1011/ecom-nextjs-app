'use client';
import { useState } from 'react';
import styles from './product_details.module.css';
import Review from '../customer_review/review';
function ControlledTabsExample() {
  const [key, setKey] = useState('desc');

  return (
    <div className={styles.details_tab}>
      <ul className={styles.tab_content}>
        <li>
          <button
            className={
              key == 'desc' ? styles.tab_button + ' ' + styles.tab_active : styles.tab_button
            }
            onClick={() => setKey('desc')}
          >
            {' '}
            Description
          </button>
        </li>

        <li>
          <button
            className={
              key == 'info' ? styles.tab_button + ' ' + styles.tab_active : styles.tab_button
            }
            onClick={() => setKey('info')}
          >
            Information
          </button>
        </li>
        <li>
          <button
            className={
              key == 'review' ? styles.tab_button + ' ' + styles.tab_active : styles.tab_button
            }
            onClick={() => setKey('review')}
          >
            Reviews
          </button>
        </li>
      </ul>

      <div className={styles.tab_content}>
        {key == 'desc' && (
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        )}

        {key == 'info' && (
          <div className={styles.info}>
            <span className={styles.info_color_size}>
              <b>Color:</b> Red, Blue, Green, White, Yellow
            </span>
            <span className={styles.info_color_size}>
              <b>Size:</b> XS, S, M, L, XL, XXL
            </span>
          </div>
        )}
        {key == 'review' && (
          <p>
            <Review />
          </p>
        )}
      </div>
    </div>
  );
}

export default ControlledTabsExample;
