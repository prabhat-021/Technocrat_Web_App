import React from 'react'
import styles from './Testimonial.module.css'
import Testicard from '../../Components/Testicard/Testicard'
const data = [{
    name:"Saumya Sinha",
    role:"Red Hat",
    img:"",
    desc:"",
    twitter:"",
    linkedin:""
},
{
    name:"Saumya Sinha",
    role:"Red Hat",
    img:"",
    desc:"",
    twitter:"",
    linkedin:""
},
{
    name:"Saumya Sinha",
    role:"Red Hat",
    img:"",
    desc:"",
    twitter:"",
    linkedin:""
}
,{
    name:"Saumya Sinha",
    role:"Red Hat",
    img:"",
    desc:"",
    twitter:"",
    linkedin:""}
,
{
    name:"Saumya Sinha",
    role:"Red Hat",
    img:"",
    desc:"",
    twitter:"",
    linkedin:""
},
{
    name:"Saumya Sinha",
    role:"Red Hat",
    img:"",
    desc:"",
    twitter:"",
    linkedin:""
},
{
    name:"Saumya Sinha",
    role:"Red Hat",
    img:"",
    desc:"",
    twitter:"",
    linkedin:""
},
{
    name:"Saumya Sinha",
    role:"Red Hat",
    img:"",
    desc:"",
    twitter:"",
    linkedin:""
}]
const Testimonial = () => {
  return (
    <div className={styles.testimonial_wrapper}>
      <div className={styles.bgname}> SAY'S</div>
      <div className={styles.test_text}>
       Experience Our Excellence <div>Through Testimonials</div> </div>
<div className={styles.testimonial_container}>
  {data.map((e)=><Testicard role={e.role} name={e.name}/>)}
</div>

    </div>
  )
}

export default Testimonial
