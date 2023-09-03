import React from 'react'
import styles from './Domaincard.module.css'
const Domaincard = (props) => {
  return (
  <div className={styles.domain_card_wrapper}>
  <img src={props.img} className={styles.domain_img}/>
  <div className={styles.domain_name}>{props.name}</div>
  </div>
  )
}

export default Domaincard
