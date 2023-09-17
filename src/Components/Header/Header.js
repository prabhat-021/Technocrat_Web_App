import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import clubIcon from '../../Assets/clubIcon.png'
import { FcMenu } from "react-icons/fc";
const Header = () => {
  // const [navcss,setnavcss] = useState({});
  return (
    <div className={styles.nav_container}>
      <img src={clubIcon} className={styles.club_icon_img} alt="logoicon"></img>

   
      <div className={styles.link_container} >
      <Link to="/" className={styles.nav_link}>Home</Link>
      <Link to="/team" className={styles.nav_link}>Team</Link>
      <Link to="/resource" className={styles.nav_link}>Resources</Link>
      
      <Link to="/resource" className={styles.nav_link}>Contact</Link>
      </div>
     <a href="https://discord.gg/aDEMAmEP"> <button className={styles.joinbtn}>Join Us</button></a>
    </div>
  );
};

export default Header;
