'use client'
import React, { useState } from 'react';
import Image from 'next/image'; // Assuming Next.js for optimized images
import styles from '../../../styles/volunteer.module.css'; // CSS module for scoped styling

const Volunteer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className={styles.volunteerSection}>
      <div className={styles.container}>
        {/* Left Side: Text Content */}
        <div className={styles.textContent}>
          <h1 className={styles.title}>Become a Volunteer</h1>

          <h2 className={styles.subtitle}>Why Volunteer?</h2>
          <p className={styles.paragraph}>
            Volunteering allows you to make a meaningful impact in your community while connecting with like-minded individuals. It’s a chance to contribute to causes you care about and create positive change.
          </p>

          <h2 className={styles.subtitle}>Benefits of Volunteering</h2>
          <p className={styles.paragraph}>
            Gain new skills, build your network, and experience the satisfaction of giving back. Volunteering boosts your well-being and provides opportunities for personal and professional growth.
          </p>

          <h2 className={styles.subtitle}>How to Volunteer</h2>
          <p className={styles.paragraph}>
            Sign up through our platform, choose a role that fits your interests, and attend an orientation session. We’ll guide you every step of the way to ensure a rewarding experience.
          </p>

          {/* Volunteer Button */}
          <button className={styles.volunteerButton} onClick={openModal}>
            Volunteer Now
          </button>
        </div>

        {/* Right Side: Image */}
        <div className={styles.imageWrapper}>
          <Image
            src="/assets/images/volunteer.png" // Updated image path
            alt="Volunteers helping out"
            width={500}
            height={400}
            className={styles.volunteerImage}
          />
        </div>
      </div>

      {/* Modal for Signup Form */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h2 className={styles.modalTitle}>Sign Up to Volunteer</h2>
            <form className={styles.signupForm}>
              <label htmlFor="name" className={styles.formLabel}>Full Name</label>
              <input placeholder="Your Names" type="text" id="name" className={styles.formInput} required />

              <label htmlFor="email" className={styles.formLabel}>Email</label>
              <input placeholder="Your Email Address" type="email" id="email" className={styles.formInput} required />

              <label htmlFor="gender" className={styles.formLabel}>Gender</label>
              <select id="gender" className={styles.formInput} required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="non-binary">Non-binary</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>

              <label htmlFor="dob" className={styles.formLabel}>Date of Birth</label>
              <input type="date" id="dob" className={styles.formInput} required />

              <label htmlFor="interest" className={styles.formLabel}>Area of Interest</label>
              <input placeholder="Your Interest" type="text" id="interest" className={styles.formInput} required />

              <div className={styles.formButtons}>
                <button type="submit" className={styles.submitButton}>Submit</button>
                <button type="button" className={styles.closeButton} onClick={closeModal}>
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Volunteer;