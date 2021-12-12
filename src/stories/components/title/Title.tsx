import React, { FunctionComponent } from 'react';
import './Title.css'

interface TitlePros {
  type: 'main' | 'sub',
  text: string
}

export const Title = ({type = 'main', text}: TitlePros) => {
    return (
        <div className={`title ${type}`}>{text}</div>
    )
}