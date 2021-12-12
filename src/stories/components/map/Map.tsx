import './Map.css'
import {
  DiscoveryButton,
  DiscoveryButtonProps,
} from 'Components/discovery-button'
import React, { ReactNode } from 'react'

export interface MapProps {
  /**
   * Path to the map image
   */
  path: string
  /**
   * List with properties and location for DiscoveryButton components
   */
  buttons?: {
    /**
     * Properties for DiscoveryButton component
     */
    btnProps: DiscoveryButtonProps
    /**
     * Distance from the top edge of the map in percent
     */
    top: number
    /**
     * Distance from the left edge of the map in percent
     */
    left: number
  }[]
}

export const Map = ({ path, buttons = [] }: MapProps) => {
  return (
    <div className='map-container'>
      <img src={path} className='map' />
      {buttons.map((btn, i) => {
        console.log(window.screen)
        return (
          <div
            key={i}
            className='container-btn'
            style={{
              top: `${btn.top}%`,
              left: `${btn.left}%`,
            }}
          >
            <DiscoveryButton {...btn.btnProps} />
          </div>
        )
      })}
    </div>
  )
}
