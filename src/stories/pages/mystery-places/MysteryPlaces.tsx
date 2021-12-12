import React from 'react'
import './MysteryPlaces.css'
import { Title } from 'Components/title'
import { Map, MapProps } from 'Components/map'
import { Card, CardProps } from 'Components/card'

interface MysteryPlacesProps {
  /**
   * Properties for Map component
   */
  mapProps: MapProps
  /**
   * Properties for Card component
   */
  cardProps: CardProps
  /**
   * Key for Card component, used to refresh animation when a new place is selected
   */
  cardKey: string
}

export const MysteryPlaces = ({
  mapProps,
  cardProps,
  cardKey,
}: MysteryPlacesProps) => {
  return (
    <div className='design'>
      <Title type='main' text='Scopri i luoghi del mistero' />
      <div className='design-content'>
        <Map {...mapProps} />
        <div className='design-card'>
          <Card key={cardKey} {...cardProps} />
        </div>
      </div>
    </div>
  )
}
