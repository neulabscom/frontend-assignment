import React from "react";
import './PlaceImage.css'

interface PlaceImageProps {
    path: string
}

export const PlaceImage = ({
    path
}: PlaceImageProps) => {
    return (
        <img src={path} className='place-img'/>
    )
}