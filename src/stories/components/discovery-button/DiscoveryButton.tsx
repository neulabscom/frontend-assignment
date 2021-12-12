import React from 'react'
import './DiscoveryButton.css'
import DiscoveryButtonImg from 'Assets/discovery-button.svg'
import DiscoveryButtonSelectedImg from 'Assets/discovery-button-selected.svg'

export interface DiscoveryButtonProps {
  /**
   * Is the button selected?
   */
  selected?: boolean
  /**
   * Click handler
   */
  onClick: () => void
}

export const DiscoveryButton = ({
  onClick,
  selected = false,
}: DiscoveryButtonProps) => {
  const containerClass = selected
    ? 'disc-btn-container-selected'
    : 'disc-btn-container'
  return (
    <div className={containerClass} onClick={onClick}>
      <img className='default' src={DiscoveryButtonImg} />
      <img className='selected' src={DiscoveryButtonSelectedImg} />
    </div>
  )
}
