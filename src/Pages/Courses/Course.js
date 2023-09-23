import React from 'react'
import styles from './Course.module.css'
import CourseCard from '../../Components/CourseCard/CourseCard'
import { Link, useSearchParams } from 'react-router-dom'
import html from '../../Assets/Courses/Web/sta-je-html.jpg'
import css from '../../Assets/Courses/Web/css.jpeg'
import js from '../../Assets/Courses/Web/js.jpeg'
import react from '../../Assets/Courses/Web/react.jpg'
import node from '../../Assets/Courses/Web/node.png'
import full from '../../Assets/Courses/Web/full.jpeg'
const data = 
 {
        Web:[
        {
            name:"Html",
            img:html,
            id:"PLu71SKxNbfoDBNF5s-WH6aLbthSEIMhMI"
        },
        {
            name:"css",
            img:css,  
            id:"PL0b6OzIxLPbzDsI5YXUa01QzxOWyqmrWw"
        },
        {
            name:"JavaScript",
            img:js,      
            id:"PL0b6OzIxLPbx-BZTaWu_AF7hsKo_Fvsnf"
        },
        {
            name:"ReactJs",
            img:react,      
            id:"PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3"
        },
        {
            name:"NodeJs",
            img:node,      
            id:"PL8p2I9GklV456iofeMKReMTvWLr7Ki9At"
        },
        {
            name:"Full-Stack",
            img:full,      
            id:"PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc"
        }],
        Machine:[
            {
                name:"Html",
                img:""
            },
            {
                name:"css",
                img:""
            },
            {
                name:"JavaScript",
                img:""
            },
            {
                name:"ReactJs",
                img:""
            },
            {
                name:"NodeJs",
                img:""
            },
            {
                name:"ExpressJs"
            },
            {
                name:"Full Projects"
            }],


    }
const Course = () => {
    const [params , setParams] = useSearchParams();
    let coursedata = [];
    switch(params.get("c")) {
        case "Web":
            coursedata = data.Web;
          break;
        case "Ml":
            coursedata = data.Ml;
          break;
        default:
          // code block
      }   
  return (
    <div className={styles.corsecont}>
        {coursedata.map((e)=><Link to={"/videos?id="+e.id}><CourseCard  img={e.img} name={e.name}/></Link>)}
    </div>
  )
}

export default Course
