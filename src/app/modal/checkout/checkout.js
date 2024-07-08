'use client'
import React ,{useEffect,useRef} from 'react'
import styles from './checkout.module.css';
import { CiShoppingCart } from "react-icons/ci";
import {categoryData} from '../../util/category';
import Image from 'next/image';
import Link from 'next/link';

export default function Filter() {

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
        const menu = window.document.querySelector("." + styles.product);
        menu.classList.toggle(styles.active);
    };
      

  return (
    <div className={styles.modal}>
        <CiShoppingCart size={30} onClick={toggleMenu}/>
        <div ref={menuRef} className={styles.product}>
            <h6>You have 2 item in cart</h6>
            {categoryData.map((item,index)=>(
              index<2 &&
                <div className={styles.cart_item} key={index}>
                    <Image src={`/${item.imageUrl}`} alt={item.name} className={styles.cart_img} width={55} height={55}/>
                    <div className={styles.cart_info}>
                        <h6>{item.name}</h6>
                        <p>{item.price}</p>
                    </div>
                </div>
            ))}
            <div className={styles.sub_total}>
            <span>Sub Total</span>
            <span>$ 205.00</span>
          </div>
          <button className={styles.view_btn}>View Cart</button>
          <Link  href='/checkout' >
          <button className={styles.checkout_btn}>Checkout</button>
          </Link>
        </div>
    </div>
  )
}
