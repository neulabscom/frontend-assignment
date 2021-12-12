import './Card.css'
import { Text } from 'Components/text'
import React, { ReactNode } from 'react'
import { Title } from 'Components/title'
import { Image, ImageProps } from 'Components/image'

export interface CardProps {
  /**
   * Card title
   */
  title: string
  /**
   * Card description
   */
  text: ReactNode
  /**
   * Properties for the Image component
   */
  imageProps: ImageProps
}

export const Card = ({ title, text, imageProps }: CardProps) => {
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
