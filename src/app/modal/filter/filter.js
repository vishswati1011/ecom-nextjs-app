"use client";
import React, { useEffect, useRef } from "react";
import styles from "./filter.module.css";
import { BsFilterSquare } from "react-icons/bs";

import { BsGrid } from "react-icons/bs";
import { GoChevronDown } from "react-icons/go";

export default function Filter() {
  const menuRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        menuRef.current.classList.remove(styles.active);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    const menu = window.document.querySelector("." + styles.product);
    menu.classList.toggle(styles.active);
  };

  return (
    <div className={styles.filter_section}>
      <div onClick={toggleMenu} className={styles.filter}>
        <BsFilterSquare className={styles.icon} size={20} />
        <BsGrid size={20} className={styles.icon} />
        <GoChevronDown size={20} />
      </div>
      <ul ref={menuRef} className={styles.product}>
        <h4>Product Categories </h4>
        <li>
          <input type="checkbox" className={styles.product_checkbox} /> Men
        </li>
        <li>
          <input type="checkbox" className={styles.product_checkbox} />
          Women
        </li>
        <li>
          <input type="checkbox" className={styles.product_checkbox} />
          Kids
        </li>
        <li>
          <input type="checkbox" className={styles.product_checkbox} />
          Bags
        </li>
        <li>
          <input type="checkbox" className={styles.product_checkbox} />
          Shoes
        </li>
        <li>
          <input type="checkbox" className={styles.product_checkbox} />
          Wallets
        </li>
        <li>
          <input type="checkbox" className={styles.product_checkbox} />
          Watches
        </li>
        <li>
          <input type="checkbox" className={styles.product_checkbox} />
          Accessories
        </li>
        <li>
          <input type="checkbox" className={styles.product_checkbox} />
          Sunglasses
        </li>
        <p>Filter By Price</p>
        <li>
          <input type="checkbox" className={styles.product_checkbox} /> $0 - $50
        </li>
        <p>Filter By Color</p>
        <li>
          <div
            className={styles.color_div}
            style={{ backgroundColor: "red" }}
          ></div>{" "}
          Red
        </li>
        <li>
          <div
            className={styles.color_div}
            style={{ backgroundColor: "blue" }}
          ></div>{" "}
          Blue
        </li>
        <li>
          <div
            className={styles.color_div}
            style={{ backgroundColor: "green" }}
          ></div>{" "}
          Green
        </li>
        <li>
          <div
            className={styles.color_div}
            style={{ backgroundColor: "yellow" }}
          ></div>{" "}
          Yellow
        </li>
        <li>
          <div
            className={styles.color_div}
            style={{ backgroundColor: "black" }}
          ></div>{" "}
          Black
        </li>
        <li>
          <div
            className={styles.color_div}
            style={{ backgroundColor: "orange" }}
          ></div>{" "}
          Orange
        </li>

        <p>Filter By Size</p>
        <li>
          <input type="checkbox" className={styles.product_checkbox} /> S
        </li>
        <li>
          <input type="checkbox" className={styles.product_checkbox} /> M
        </li>
        <li>
          <input type="checkbox" className={styles.product_checkbox} /> L
        </li>
        <li>
          <input type="checkbox" className={styles.product_checkbox} /> XL
        </li>
        <li>
          <input type="checkbox" className={styles.product_checkbox} /> XXL
        </li>
        <li>
          <input type="checkbox" className={styles.product_checkbox} /> XXXL
        </li>
      </ul>
    </div>
  );
}
