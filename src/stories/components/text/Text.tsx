import React, { FunctionComponent } from "react";
import './Text.css'

export const Text: FunctionComponent = ({children}) => {
    return (
        <p className='custom-text'>{children}</p>
    )
}