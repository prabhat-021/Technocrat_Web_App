import React from "react";
import styles from "./About.module.css";
import aboutIllustration from "../../Assets/home.png";
const About = () => {
  return (
    <>
      <div className={styles.about_wrapper}>
        {/* <h1 className={styles.about_heading}> About Us </h1> */}
        <div className={styles.bgname}>TECHNOCRATS</div>

  <div className={styles.about_text_wrapper}>
         <span className={styles.about_text_1}>Where --</span>
         <span className={styles.about_text_1}>  Passion Meets</span>
        <span className={styles.about_text_1}>
        
          Technology
        </span>
        </div>
        <div className={styles.about_text_2_wrapper}>
        <div className={styles.about_text_2}>
      
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          vitae obcaecati hic doloribus illo, odio tempore incidunt magni quis
          iste repudiandae ab totam quisquam sunt cumque atque pariatur
          recusandae corrupti. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Provident vel corporis facilis inventore rerum
          exercitationem, id ut cupiditate obcaecati praesentium iure officiis
          minus animi quos excepturi officia sed, nostrum quam.{" "}
        </div>
        </div>
      </div>
    </>
  );
};

export default About;
