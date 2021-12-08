import React, { useState } from "react";
import './Design.css'
import { PageTitle } from "./PageTitle";
import { Map } from './Map'
import MapImg from './assets/map.svg'
import HotelImg from './assets/hotel.svg'
import ChurchImg from './assets/church.svg'
import GraveyardImg from './assets/graveyard.svg'
import { Card } from "./Card";
import { DiscoveryButton } from "./DiscoveryButton";

const levelsProps = {
  hotel: {
    contentProps: {
      title: 'The Hotel',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.'
    },
    imageProps: {
      title: 'Livello 1',
      pathImg: HotelImg
    }
  },
  church: {
    contentProps: {
      title: 'The Church',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.'
    },
    imageProps: {
      title: 'Livello 2',
      pathImg: ChurchImg
    }
  },
  graveyard: {
    contentProps: {
      title: 'The Graveyard',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.'
    },
    imageProps: {
      title: 'Livello 3',
      pathImg: GraveyardImg
    }
  }
}

export const Design = () => {
  const [Level, setLevel] = useState<'hotel' | 'church' | 'graveyard'>('hotel')

  const getButton = (levelName: 'hotel' | 'church' | 'graveyard') => (
    <DiscoveryButton selected={Level===levelName} onClick={() => setLevel(levelName)} />
  )

  const mapProps = {
    path: MapImg,
    buttons: [{
      component: getButton('hotel'),
      top: 19,
      left: 31.5
  }, {
      component: getButton('church'),
      top: 34,
      left: 77.5
  }, {
      component: getButton('graveyard'),
      top: 84,
      left: 46
  },]
  }

  return (
    <div className='design'>
      <PageTitle>Scopri i luoghi del mistero</PageTitle>
      <div className='design-content'>
        <Map {...mapProps} />
        <div className='design-card'>
          <Card {...levelsProps[Level]} />
        </div>
      </div>
    </div>
  )
}