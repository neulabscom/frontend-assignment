import './Title.css'
import React from 'react'

interface TitlePros {
  /**
   * Main is centered, while sub is smaller and left aligned
   */
  type: 'main' | 'sub'
  /**
   * Title text
   */
  text: string
}

export const Title = ({ type = 'main', text }: TitlePros) => {
  return <div className={`title ${type}`}>{text}</div>
}
