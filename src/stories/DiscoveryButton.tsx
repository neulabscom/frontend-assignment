import React from "react";
import DiscoveryButtonImg from './assets/discovery-button.svg'
import DiscoveryButtonSelectedImg from './assets/discovery-button-selected.svg'
import './DiscoveryButton.css'

interface DiscoveryButtonProps {
    selected?: boolean
    onClick: () => void
}

export const DiscoveryButton = ({
    onClick,
    selected = false,
}: DiscoveryButtonProps) => {
    const containerClass = selected ? 'disc-btn-container-selected' : 'disc-btn-container'
    return (
        <div className={containerClass} onClick={onClick}>
            <img className='default' src={DiscoveryButtonImg} />
            <img className='selected' src={DiscoveryButtonSelectedImg} />
        </div>
    )
}