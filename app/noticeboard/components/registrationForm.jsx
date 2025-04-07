// app/events/components/RegistrationForm.jsx
import React from 'react';
import styles from '../../../styles/registrationForm.module.css'; // CSS module for scoped styling

const RegistrationForm = ({ onClose }) => {
  return (
    <div className={styles.modalContent}>
      <h2 className={styles.modalTitle}>Registration Form</h2>
      <form className={styles.signupForm}>
        <label htmlFor="name" className={styles.formLabel}>
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          placeholder="Enter your full name"
          className={styles.formInput}
          required
        />

        <label htmlFor="email" className={styles.formLabel}>
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email address"
          className={styles.formInput}
          required
        />

        <label htmlFor="institution" className={styles.formLabel}>
          Institution (Optional)
        </label>
        <input
          id="institution"
          type="text"
          placeholder="Enter your institution (if applicable)"
          className={styles.formInput}
        />

        <label htmlFor="gender" className={styles.formLabel}>
          Gender <span className="text-red-500">*</span>
        </label>
        <select id="gender" className={styles.formInput} required>
          <option value="">Select your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="age" className={styles.formLabel}>
          Age <span className="text-red-500">*</span>
        </label>
        <input
          id="age"
          type="number"
          placeholder="Enter your age"
          className={styles.formInput}
          required
        />

        <div className={styles.formButtons}>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
          <button type="button" className={styles.closeButton} onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;