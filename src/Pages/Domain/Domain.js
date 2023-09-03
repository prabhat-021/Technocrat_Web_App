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
    data: "this is a web development ... ",
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
    name: "Internet of Things",
    data: "this is a web development ... ",
    img:iot
  },
  {
    name: "Graphics Design",
    data: "this is a web development ... ",
    img:graphic
  },
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
            <Domaincard name={e.name} img={e.img} />
          ))}
        </div>


      </div>
   
  );
};

export default Domain;
