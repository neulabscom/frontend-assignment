import './Image.css'
import React from 'react'

export interface ImageProps {
  /**
   * Text to display under the image
   */
  caption: string
  /**
   * Path to the image
   */
  pathImg: string
}

export const Image = ({ caption, pathImg }: ImageProps) => {
  return (
    <div className='container-img'>
      <img src={pathImg} className='custom-img' />
      <div className='caption'>{caption}</div>
    </div>
  )
}
