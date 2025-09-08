'use client';
import Button from 'react-bootstrap/Button';
import React from 'react';
import Form from 'react-bootstrap/Form';
import styles from './addreview.module.css';
export default function AddYourReview() {
  return (
    <div className={styles.form_div}>
      <h6>Add Your Review</h6>
      <Form className={styles.form_review}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className={styles.form_label}>Your Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className={styles.form_label}>Email address</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className={styles.form_label}>Your Review</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button type="submit" variant="dark">
          Submit
        </Button>
      </Form>
    </div>
  );
}
