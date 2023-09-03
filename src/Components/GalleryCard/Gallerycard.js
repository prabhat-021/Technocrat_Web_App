import React from 'react'
import styles from './Gallerycard.module.css'
const Gallerycard = (props) => {
  return (
    <div>
     <img src={props.image} alt="illustartion"/> 
    </div>
  )
}

export default Gallerycard
