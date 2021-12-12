import React from "react";
import './MysteryPlaces.css'
import { Title } from "Components/title";
import { Map, MapProps } from 'Components/map'
import { Card, CardProps } from "Components/card";

interface MysteryPlacesProps {
  mapProps: MapProps,
  cardProps: CardProps,
  cardKey: string
}

export const MysteryPlaces = ({mapProps, cardProps, cardKey}: MysteryPlacesProps) => {
  return (
    <div className='design'>
      <Title type='main' text="Scopri i luoghi del mistero" />
      <div className='design-content'>
        <Map {...mapProps} />
        <div className='design-card'>
          <Card key={cardKey} {...cardProps} />
        </div>
      </div>
    </div>
  )
}