import React, {ReactNode} from 'react';
import './Card.css'
import { Title } from 'Components/title';
import { Text } from 'Components/text'
import { Image } from 'Components/image' 

export interface CardProps {
  title: string,
  text: ReactNode,
  imageProps: {
    caption: string
    pathImg: string
  }
}

export const Card = ({title, text, imageProps}: CardProps) => {
  return (
    <div id='card'>
      <hr className='separator' />
      <div className='card-content'>
        <div className='card-text'>
          <Title type='sub' text={title} />
          <Text>{text}</Text>
        </div>
        <Image {...imageProps} />
      </div>
      <hr className='separator' />
    </div>
  )
}