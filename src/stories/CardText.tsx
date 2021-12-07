import React from 'react';
import { CardBody } from './CardBody';
import { CardTitle } from './CardTitle';
import './CardText.css'

interface CardTextProps {
  title: string
  body: string
}

export const CardText = ({title, body}: CardTextProps) => {
  return (
    <div className='card-text'>
      <CardTitle>{title}</CardTitle>
      <CardBody>{body}</CardBody>
    </div>
  )
}