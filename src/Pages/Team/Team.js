import React from "react";
import styles from "./Team.module.css";
import Teamcard from "../../Components/TeamCard/Teamcard";
import teamsample from '../../Assets/teamsample.png'
import aryan from '../../Assets/sam.png'
const data = [
  {
    name: "Aryan Tiwari",
    role: "Web-Lead",
    img: aryan
  },
  {
    name: "Sanskriti Vats",
    role: "Web-Lead",
    img:aryan 
  },
  {
    name: "Aryan Tiwari",
    role: "Web-Lead",
    img: aryan
  },
  {
    name: "Aryan Tiwari",
    role: "Web-Lead",
    img: aryan
  },
  {
    name: "Aryan Tiwari",
    role: "Web-Lead",
    img:aryan
  },
  {
    name: "Aryan Tiwari",
    role: "Web-Lead",
    img: aryan
  },
  {
    name: "Sanskriti Vats",
    role: "Web-Lead",
    img:aryan
  },
  {
    name: "Aryan Tiwari",
    role: "Web-Lead",
    img:aryan
  },
  {
    name: "Aryan Tiwari",
    role: "Web-Lead",
    img:aryan
  },
  {
    name: "Aryan Tiwari",
    role: "Web-Lead",
    img:aryan
  },
];

const Team = () => {
  return (
    <div className={styles.testimonial_wrapper}>
      <div className={styles.bgname}> TEAM</div>
      <div className={styles.test_text}>
        The People Who Drive <div>Our Mission </div>{" "}
      </div>
      <div className={styles.mainimgdiv}><img src={teamsample}/></div>
      <div className={styles.team_container}>
{data.map((e)=><Teamcard name={e.name} img={e.img} role={e.role}/>)}
      </div>
    </div>
  );
};

export default Team;
