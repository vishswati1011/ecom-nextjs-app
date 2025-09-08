import React from 'react';
import styles from './payment.module.css';
import { Form, Button, Row, Col } from 'react-bootstrap';

export default function Payment() {
  return (
    <div className={styles.address}>
      <p>Select a payment method</p>
      <div className={styles.debit_card}>
        <input type="radio" id="credit" name="payment" value="credit" /> Debit/Credit Card
      </div>

      <Form className={styles.form_review}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className={styles.form_label}>Card Number</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className={styles.form_label}>Card Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className={styles.form_label}>Expiry Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className={styles.form_label}>CVV</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
          </Col>
        </Row>

        <Button type="submit" variant="dark">
          Add card
        </Button>
      </Form>

      <div className={styles.debit_card}>
        <input type="radio" id="credit" name="payment" value="credit" /> Google Pay
      </div>
      <div className={styles.debit_card}>
        <input type="radio" id="credit" name="payment" value="credit" /> Paypal
      </div>
      <div className={styles.debit_card}>
        <input type="radio" id="credit" name="payment" value="credit" /> Cash on Delivery
      </div>
    </div>
  );
}
