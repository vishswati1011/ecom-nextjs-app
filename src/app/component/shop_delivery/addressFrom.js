"use client";
import Button from 'react-bootstrap/Button';
import React from "react";
import Form from "react-bootstrap/Form";
import styles from "../customer_review/addreview.module.css";
export default function AddYourReview() {
  return (
    <div className={styles.form_div}>
      <h6>Add a new address</h6>
      <Form className={styles.form_review}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className={styles.form_label}>Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className={styles.form_label}>Mobile Number</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className={styles.form_label}>Flat, House no, Building, Company, Appartment</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className={styles.form_label}>Area Colony Street Sector</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className={styles.form_label}>City</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className={styles.form_label}>Pincode</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className={styles.form_label}>State</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

    
        <Button type="submit" variant="dark">Add new address</Button>
      </Form>
    </div>
  );
}
