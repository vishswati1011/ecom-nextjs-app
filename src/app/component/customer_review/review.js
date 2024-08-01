import React from "react";
import Image from "next/image";
import { review_data } from "../../util/review";
import styles from "./review.module.css";
import { FaStar } from "react-icons/fa";

export default function Review() {
  return (
    <div className={styles.review}>
      <h6>Customer Review</h6>
      {review_data.map((review, index) => (
        <div className={styles.review_main} key={index}>
          <div className={styles.review_user}>
            <Image src={review.image} alt="user" width="50" height="50" />
            <span className={styles.user_title}>
              <label>{review.name}</label>
              <ul>
                {Array.from({ length: review.rating }).map((_, index) => (
                  <li key={index}>
                    <FaStar />
                  </li>
                ))}
              </ul>
            </span>
          </div>
          <div className={styles.review_comment}>
            <p> {review.comment}</p>
            <date>{review.date}</date>
          </div>
        </div>
      ))}
    </div>
  );
}
