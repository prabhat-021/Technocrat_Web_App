import React from "react";
import contactill from "../../Assets/contactill.png";
import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <div className={styles.container}>
      <img className={styles.contill} src={contactill} alt="illustration" />
      <div className={styles.input_container}>
        <div className={styles.testimonial_wrapper}>
          <div className={styles.bgname}> CALL</div>
          <div className={styles.test_text}>
            Ready to Work Together
            <div>In News Projects ?</div>{" "}
          </div>
        </div>

        <input className={styles.input} placeholder="Your Name" />
        <input className={styles.input} placeholder="Your Email" />
        <input className={styles.input} placeholder="Your Message" />
        <botton className={styles.contbtn}>Submit Now</botton>
      </div>
    </div>
  );
};

export default Contact;
