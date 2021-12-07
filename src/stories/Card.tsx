import React from 'react';
import { CardText } from './CardText';
import { CardImage } from './CardImage';
import './Card.css'

interface CardProps {
  contentProps: {
    title: string
    body: string
  }
  imageProps: {
    title: string
    pathImg: string
  }
}

export const Card = ({contentProps, imageProps}: CardProps) => {
  return (
    <div className='card'>
      <hr className='separator' />
      <div className='card-content'>
        <CardText {...contentProps} />
        <CardImage {...imageProps} />
      </div>
      <hr className='separator' />
    </div>
  )
}