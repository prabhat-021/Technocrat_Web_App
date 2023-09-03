import React from 'react'
import styles from './Testicard.module.css'
import saumicon from '../../Assets/testsaum.png'
const Testicard = (props) => {
  return (
    <div className={styles.testcard_wrapper}>
        <div style={{margin:"15px", display:"flex",gap:"20px"}}>
        <img style={{borderRadius:"50%"}} src={saumicon}/>
        <div>
        <div className={styles.testcrad_name}>{props.name}</div>
      <div className={styles.testcard_role}>{props.role}</div>
        </div>
        </div>
       
   
      <div className={styles.testcard_desc}>{props.desc}</div>
    </div>
  )
}

export default Testicard
