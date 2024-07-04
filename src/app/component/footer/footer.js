import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import { MdWifiCalling3 } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { SlSocialFacebook } from "react-icons/sl";
import { AiOutlineInstagram } from "react-icons/ai";
import { TfiTwitter } from "react-icons/tfi";
import { BsArrowRightSquareFill } from "react-icons/bs";

export default function Footer() {
  return (
    <div className={styles.footer_center}>

    <div className={styles.footer_section}>
            <ul>
                <li>
                    <Image src='/images/logo/logo_black.png' alt='logo_black' width={150}  height={50}/>
                </li>
                <li> <MdWifiCalling3  size={20} className={styles.icon}/> (704) 555-0127</li>
                <li> <BiMessageDetail size={20} className={styles.icon}/> krist@example.com</li>
                <li> <IoLocationOutline size={20} className={styles.icon}/> 3891 Ranchview Dr. Richardson California 62639</li>
            </ul>
        </div>

        <div className={styles.footer_section}>
            <p>Information</p>
            <ul>
                <li>My Account</li>
                <li>Login</li>
                <li>My Cart</li>
                <li>My Wishlist</li>
                <li>Checkout</li>
            </ul>
        </div>

        <div className={styles.footer_section}>
            <p>Service</p>
            <ul>
                <li>About Us</li>
                <li>Careers</li>
                <li>Delivery Information</li>
                <li>Privacy & Conditions</li>
            </ul>
        </div>

        <div className={styles.footer_section}>
            <p>Subscribe</p>
            <ul>
                <li>Enter your email below to be the first to know about 
                    new collections and product launches
                </li>
                <li ><div className={styles.your_email}> <BiMessageDetail size={20} /> 
                Your Email <BsArrowRightSquareFill size={20} /> </div></li>
            </ul>
        </div>

    </div>
  )
}
