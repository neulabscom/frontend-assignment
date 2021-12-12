import './Text.css'
import React, { FunctionComponent } from 'react'

export const Text: FunctionComponent = ({ children }) => {
  return <p className='custom-text'>{children}</p>
}
