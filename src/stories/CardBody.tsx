import React, { FunctionComponent } from "react";
import './CardBody.css'

export const CardBody: FunctionComponent = ({children}) => {
    return (
        <p className='card-body'>{children}</p>
    )
}