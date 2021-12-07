import React, { FunctionComponent } from 'react';
import './PageTitle.css'

export const PageTitle: FunctionComponent = ({children}) => {
    return (
        <h1 className='page-title'>{children}</h1>
    )
}