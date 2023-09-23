import React from 'react'
import styles from './Videocard.module.css'
const Videocard = (props) => {
  return (
    <div className={styles.videocardcont}>
      <img className={styles.thumbnail} src={props.img}/>
    </div>
  )
}

export default Videocard
