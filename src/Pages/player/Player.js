import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Player = () => {
    const [params, setParam] = useSearchParams();
    console.log(params.get("v"))
  
  return (
    <div>
    <iframe
        width="860"
        height="415"
        src={"https://www.youtube.com/embed/"+params.get("v")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      </div>
  )
}

export default Player
