import React, { ReactNode } from "react";
import './Map.css'
import { DiscoveryButton, DiscoveryButtonProps } from "Components/discovery-button";

export interface MapProps {
  path: string,
  buttons?: {
    btnProps: DiscoveryButtonProps,
      top: number,
      left: number
  }[]
}

export const Map = ({path, buttons = []}: MapProps) => {
  return (
    <div className='map-container'>        
      <img src={path} className='map' />
      {
        buttons.map((btn, i) => (
          <div key={i} className='container-btn' style={{
              top: `${btn.top}%`,
              left: `${btn.left}%`
          }}>
            <DiscoveryButton {...btn.btnProps} />
          </div>
        ))
      }
    </div>
  )
}