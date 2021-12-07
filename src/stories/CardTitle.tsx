import React, { FunctionComponent } from "react";
import './CardTitle.css'

export const CardTitle: FunctionComponent = ({children}) => {
    return (
        <h2 className='card-title'>{children}</h2>
    )
}