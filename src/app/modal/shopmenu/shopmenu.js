'use client';
import React,{useEffect,useRef} from 'react'
import styles from "./shopmenu.module.css";
import {menuData} from "../../util/shopmenu"
import { FaAngleDown } from 'react-icons/fa';
import Link from "next/link";

export default function Shopmenu({handleNavClose}) {

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
  

    const toggleMenu = (e) => {
        menuRef.current.classList.toggle(styles.active);
    };

      
  return (
    <div>
        <span ><Link href="/shop" className={styles.link}>Shop </Link><FaAngleDown onClick={(e)=>toggleMenu(e)}/></span>
        <div className={styles.menu} ref={menuRef}>
            {menuData.map((category,index) => (
                <ul key={index} >
                    <h6>{category.category}</h6>
                    {category.items.map((item,index) => (
                        <li key={index}>{item.name}</li>
                    ))}
                    </ul>
                ))}
        </div>
    </div>
  )
}
