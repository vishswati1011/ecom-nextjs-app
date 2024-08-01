"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoMenuSharp } from "react-icons/io5";
import Link from "next/link";
import CheckoutModal from "../../modal/checkout/checkout";
import Shopmenu from "../../modal/shopmenu/shopmenu";


export default function Header() {


  const menuRef = useRef();
  const [show,setShow]= useState(false);
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      menuRef.current.classList.remove(styles.active);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    menuRef.current.classList.toggle(styles.active);
  };

  return (
    <div>
      {/** desktop view */}
      <nav className={styles.desktop_header}>
      <Link href="/" className={styles.link}>
        <Image src="/images/k_logo.png" alt="logo" width="200" height="70" />
        </Link>
        <ul className={styles.nav_list}>
          <li>
            <Link href="/shop" className={styles.link}>
              <Shopmenu />
            </Link>
          </li>
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
            <CheckoutModal />
          </li>
          <li>
            <Link href="/login" className={styles.link}>
              <button className={styles.list_btn}>Login</button>
            </Link>
          </li>
        </ul>
      </nav>

      {/** responsive */}
      <nav className={styles.header}>
        <div className={styles.logo_section}>
          <Image src="/images/k_logo.png" alt="logo" width="200" height="100" />
        </div>

        <div className={styles.menu_list}>
          <span onClick={toggleMenu}>
            <IoMenuSharp size={30} />
          </span>
          <ul className={styles.mobile_menu} ref={menuRef}>
            <li>
                <Shopmenu handleNavClose={toggleMenu} />
            </li>
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
            <Link href="/checkout" className={styles.link}>

            <CiShoppingCart size={30}/>
            </Link>
            </li>
            <li>
              <Link href="/login" className={styles.link}>
                <button className={styles.list_btn}>Login</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
