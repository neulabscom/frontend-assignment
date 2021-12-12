import React from "react";
import DiscoveryButtonImg from 'Assets/discovery-button.svg'
import DiscoveryButtonSelectedImg from 'Assets/discovery-button-selected.svg'
import './DiscoveryButton.css'

export interface DiscoveryButtonProps {
    selected?: boolean
    onClick: () => void
}

export const DiscoveryButton = ({
    onClick,
    selected = false,
}: DiscoveryButtonProps) => {
    console.log(onClick, selected)
    const containerClass = selected ? 'disc-btn-container-selected' : 'disc-btn-container'
    return (
        <div className={containerClass} onClick={onClick}>
            <img className='default' src={DiscoveryButtonImg} />
            <img className='selected' src={DiscoveryButtonSelectedImg} />
        </div>
    )
}