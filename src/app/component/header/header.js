"use client";
import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoMenuSharp } from "react-icons/io5";

export default function Header() {
  const toggleMenu = () => {
    const menu = window.document.querySelector("." + styles.mobile_menu);
    menu.classList.toggle(styles.active);
    // menu.classList.toggle(`${styles.nav_list}  ${styles.active}`);
  };

  return (
    <div>
      {/** desktop view */}
      <nav className={styles.desktop_header}>
        <Image src="/images/k_logo.png" alt="logo" width="200" height="70" />

        <ul className={styles.nav_list}>
          <li>Home</li>
          <li>Shop</li>
          <li>Our Story</li>
          <li>Blog</li>
          <li>Contact us</li>
        </ul>

        <ul className={styles.nav_list}>
          <li>
            <CiSearch size={25} />
          </li>
          <li>
            <CiHeart size={25} />
          </li>
          <li>
            <CiShoppingCart size={25} />
          </li>
          <li>
            <button className={styles.list_btn}>Login</button>
          </li>
        </ul>
      </nav>

      {/** responsive */}
      <nav className={styles.header}>
        <div className={styles.logo_section}>
          <Image src="/images/k_logo.png" alt="logo" width="200" height="100" />
        </div>

        <div className={styles.menu_list}>
          <span onClick={toggleMenu}><IoMenuSharp size={30}/></span>
          <ul className={styles.mobile_menu}>
            <li>Home</li>
            <li>Shop</li>
            <li>Our Story</li>
            <li>Blog</li>
            <li>Contact us</li>
            <li>
              <CiSearch size={30} />
            </li>
            <li>
              <CiHeart size={30} />
            </li>
            <li>
              <CiShoppingCart size={30} />
            </li>
            <li>
              <button className={styles.list_btn}>Login</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}