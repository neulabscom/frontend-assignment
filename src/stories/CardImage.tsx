import React from "react";
import { ImageTitle } from "./ImageTitle";
import { PlaceImage } from "./PlaceImage";
import './CardImage.css'

interface CardImageProps {
  title: string
  pathImg: string
}

export const CardImage = ({title, pathImg}: CardImageProps) => {
  return (
    <div className='card-image'>
      <PlaceImage path={pathImg} />
      <ImageTitle>{title}</ImageTitle>
    </div>
  )
}