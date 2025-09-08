import React from 'react';

import styles from './address.module.css';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import ShopAddressForm from './addressFrom';

export default function Address() {
  return (
    <div>
      <div className={styles.address}>
        <p>Select a delivery address</p>
        <desc>
          Is the address like to use displayed below? if so, corresponding. Deliver to this button.
          Or you can enter a new delivery address.
        </desc>
        <div className={styles.cards}>
          <div className={styles.address_card}>
            <span className={styles.title}>
              {' '}
              <label>Robert Fox</label> <input type="checkbox" />
            </span>
            <span className={styles.add}>4517 Washington Ave. Manchester, kentunky 39495</span>
            <span className={styles.edit_delete}>
              <button className={styles.edit_button}>
                {' '}
                <FiEdit /> &nbsp; Edit
              </button>
              <button className={styles.delete_button}>
                <RiDeleteBin6Line /> &nbsp; Delete
              </button>
            </span>
          </div>
          <div className={styles.address_card}>
            <span className={styles.title}>
              {' '}
              <label>Robert Fox</label> <input type="checkbox" />
            </span>
            <span className={styles.add}>4517 Washington Ave. Manchester, kentunky 39495</span>
            <span className={styles.edit_delete}>
              <button className={styles.edit_button}>
                {' '}
                <FiEdit /> &nbsp; Edit
              </button>
              <button className={styles.delete_button}>
                <RiDeleteBin6Line className={styles.delete_icon} /> &nbsp; Delete
              </button>
            </span>
          </div>
        </div>
      </div>

      <ShopAddressForm />
    </div>
  );
}
