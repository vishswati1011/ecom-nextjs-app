import React from 'react';
import { Modal } from 'react-bootstrap';
import styles from './alert.module.css';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const AlertModal = ({ showModal,  onClose }) => {
  return (
    <Modal show={showModal} onHide={onClose} centered>
      <Modal.Body>
        <div className={styles.alert}>
          <IoMdCheckmarkCircleOutline size={50} color="green" />
          <p>Password Changed Successfully</p>
          <span>your Password has been updated successfully.</span>
          <button>Back to Login</button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AlertModal;
