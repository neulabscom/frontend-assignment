import React, { ReactNode } from "react";
import './Map.css'

interface MapProps {
    path: string,
    buttons?: {
        component: ReactNode,
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
                        {btn.component}
                    </div>
                ))
            }
        </div>
    )
}