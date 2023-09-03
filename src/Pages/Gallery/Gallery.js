import React from 'react'
import styles from './Gallery.module.css'
import sample from '../../Assets/team/Card.png'
import Gallerycard from '../../Components/GalleryCard/Gallerycard'
const imgdata = [
  {
    name:"aryan",
    img:sample
  }, {
    name:"aryan",
    img:sample
  }, {
    name:"aryan",
    img:sample
  }, {
    name:"aryan",
    img:sample
  }, {
    name:"aryan",
    img:sample
  }, {
    name:"aryan",
    img:sample
  },
]
const Gallery = () => {
  return (
    <div className={styles.testimonial_wrapper}>
    <div className={styles.bgname}> GALLERY</div>
    <div className={styles.test_text}>
    A Glimpse of Our  <div>Vision</div> </div>
<div className={styles.imagecontainer}>
{imgdata.map((e)=><Gallerycard image={e.img}/>)}
</div>
<button className={styles.gall_btn}>Show More</button>
  </div>
  )
}

export default Gallery
