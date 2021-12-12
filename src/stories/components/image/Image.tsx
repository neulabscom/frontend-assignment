import React from "react";
import './Image.css'

interface ImageProps {
  caption: string
  pathImg: string
}

export const Image = ({caption, pathImg}: ImageProps) => {
  return (
    <div className='container-img'>
      <img src={pathImg} className='custom-img'/>
      <div className='caption'>{caption}</div>
    </div>
  )
}