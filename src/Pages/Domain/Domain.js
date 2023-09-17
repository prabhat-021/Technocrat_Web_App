import React from "react";
import styles from "./Domain.module.css";
import Domaincard from "../../Components/Domaincard/Domaincard";
// import ml from '../../Assets/ml.jpg'
import and from "../../Assets/android.png";
import webd from "../../Assets/webdev.png";
import cyber from "../../Assets/cyber.png";
import meta from "../../Assets/arvr.png";
import iot from "../../Assets/iot.png";

import graphic from "../../Assets/graphics.png";
const data = [
  { 
    name: "Web-Development",
    data: "Examined as an existence in the soul of the Internet age, Web Development is a professional field which has helped the world envision numerous aspects of E-shopping, E-transition and many more ",
    img: webd,
  },
  {
    name: "Machine Learning ",
    data: "this is a web development ... ",
    img:graphic
  },
  {
    name: "Android-Development",
    data: "this is a web development ... ",
    img: and,
  },
  {
    name: "AR-VR",
    data: "this is a web development ... ",
    img: meta,
  },
  {
    name: "Cyber-Security",
    data: "this is a web development ... ",
    img: cyber,
  },
  {
    name: "UI-UX",
    data: "this is a web development ... ",
    img: cyber,
  },
  {
    name: "Content-Writing",
    data: "this is a web development ... ",
    img: cyber,
  }
];
const Domain = () => {
  return (
    <div className={styles.domain_wrapper}>
      
        <div className={styles.bgname}>DOMAINS</div>
       
        <div className={styles.domain_text}>
          Dive Deeper into Our
          <div> Technical Domains</div>{" "}
        </div>

        <div className={styles.domain_container}>
          {data.map((e) => (
            <Domaincard key={e} name={e.name} img={e.img} data={e.data} />
          ))}
        </div>


      </div>
   
  );
};

export default Domain;
