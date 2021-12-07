import React, { FunctionComponent } from "react";
import './ImageTitle.css'

export const ImageTitle: FunctionComponent = ({children}) => {
    return (
        <h2 className='image-title'>{children}</h2>
    )
}