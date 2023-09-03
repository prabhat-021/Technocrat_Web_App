import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.foter_blocks_1}>
        <div>HOME</div>
        <div>ABOUT US</div>
        <div>DOMAINS</div>
        <div>TESTIMONIALS</div>
      </div>
      <div className={styles.foter_blocks_2}>
        <div>GALLERY</div>
        <div>ACHEIVMENTS</div>
        <div>BLOGS</div>
        <div>MEET OUR TEAM</div>
      </div>
      <div className={styles.foter_blocks_3}>
        <div>kIET GROUP OF INSTITIUTION</div>
        <div>MURADNAGER,GHAZIABAD</div>
        <div>8299550885 </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
