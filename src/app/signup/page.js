'use client';
import React,{useState} from "react";
import styles from "../login/login.module.css";
export default function Login() {

  const [inputValue,setInputValue] = useState({
    email : '',
    username : ''
  })

  const handleChange = (e) =>{
    const {name,value} = e.target;
 
    setInputValue({
      ...inputValue,
      [name] : value
    })
  }
 
  const handleSubmit =async(e) =>{
    e.preventDefault();
    router.push('/')
  }

  return (
    <div className={styles.container}>
      <div className={styles.left_side}>
        <div className={styles.login_div}>
          <h2>Create New Account</h2>
          <span className={styles.text_muted}>Please enter details</span>
          <form className={styles.form} onSubmit={(e)=>handleSubmit(e)}>
          <input
              type="firstName"
              name="firstName"
              placeholder="First Name"
              className={styles.input}
              value={inputValue.firstName}
              onChange={(e)=>handleChange(e)}

            />
              <input
              type="lastName"
              name="lastName"
              placeholder="Last Name"
              className={styles.input}
              value={inputValue.lastName}
              onChange={(e)=>handleChange(e)}

            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input}
              value={inputValue.email}
              onChange={(e)=>handleChange(e)}

            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className={styles.input}
              value={inputValue.password}
              onChange={(e)=>handleChange(e)}

            />
            <button className={styles.button}>Singup</button>
            <div className={styles.linkContainer}>
              <a href="/login" className={styles.link}>
                already have an account?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}