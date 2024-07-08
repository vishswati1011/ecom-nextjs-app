'use client'
import React ,{useEffect,useRef} from 'react'
import styles from "./header.module.css";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoMenuSharp } from "react-icons/io5";
import Link from 'next/link';
export default function Header() {
 
  const menuRef = useRef(); 
  useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          menuRef.current.classList.remove(styles.active);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []); 

    const toggleMenu = () => {
      const menu = window.document.querySelector("." + styles.mobile_menu);
      menu.classList.toggle(styles.active);
    };

  return (
    <div>
      {/** desktop view */}
      <nav className={styles.desktop_header}>
        <Image src="/images/k_logo.png" alt="logo" width="200" height="70" />

        <ul className={styles.nav_list}>
        <li> <Link href='/' className={styles.link}>Home</Link></li>
            <li> <Link href='/shop'className={styles.link}>Shop</Link></li>
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
          <Link href='/login' className={styles.link}>
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
          <span onClick={toggleMenu}><IoMenuSharp size={30}/></span>
          <ul className={styles.mobile_menu} ref={menuRef}>
            <li> <Link href='/' className={styles.link}>Home</Link></li>
            <li> <Link href='/shop'className={styles.link} >Shop</Link></li>
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
            <Link href='/login' className={styles.link}>
              <button className={styles.list_btn}>Login</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
