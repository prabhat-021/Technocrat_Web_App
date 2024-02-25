import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contactill from "../../Assets/contactill.png";
import styles from "./Contact.module.css";
import toast from 'react-hot-toast';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_768sn4r', 'template_pk2uyaq', form.current, '0pJwt3zoFQv1CRgBA')
      .then((result) => {
        toast.success('Message Sent');
          console.log(result.text);
      }, (error) => {
        toast.error('Message is not sent some error');
          console.log(error.text);
      });
  };
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
        <form className={styles.form} ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input className={styles.input} type="text" name="user_name" placeholder='Your Name'/>
      <label>Email</label>
      <input className={styles.input} type="email" name="user_email" placeholder='Your Email' /> 
      <label>Message</label>
      <textarea name="message" placeholder='Your Message' />
      <input className={styles.contbtn} type="submit" value="Submit Now" />
    </form>


        {/* <input className={styles.input} placeholder="Your Name" />
        <input className={styles.input} placeholder="Your Email" />
        <input className={styles.input} placeholder="Your Message" />
        <botton className={styles.contbtn}>Submit Now</botton> */}
      </div>
    </div>
  );
};

export default Contact;
