import MapImg from 'Assets/map.svg'
import { Map } from 'Components/map'
import { LEVELS_PROPS } from 'Consts'
import { Card } from 'Components/card'
import React, { useState } from 'react'
import { MysteryPlaces } from './MysteryPlaces'
import { ComponentMeta } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

export default {
  title: 'Pages/Mystery Places',
  component: MysteryPlaces,
  subcomponents: {
    Map,
    Card,
  },
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    backgrounds: {
      default: 'frontend-assignment',
      values: [
        {
          name: 'frontend-assignment',
          value: '#ECE8D5',
        },
      ],
    },
  },
} as ComponentMeta<typeof MysteryPlaces>

export const Playground = () => {
  const [Level, setLevel] = useState<LevelTypes>('hotel')

  const getBtnProps = (levelName: LevelTypes) => ({
    selected: levelName === Level,
    onClick: () => setLevel(levelName),
  })

  const mapProps = {
    path: MapImg,
    buttons: [
      {
        btnProps: getBtnProps('hotel'),
        top: 19,
        left: 31.5,
      },
      {
        btnProps: getBtnProps('church'),
        top: 34,
        left: 77.5,
      },
      {
        btnProps: getBtnProps('graveyard'),
        top: 84,
        left: 46,
      },
    ],
  }

  return (
    <MysteryPlaces
      mapProps={mapProps}
      cardProps={{ ...LEVELS_PROPS[Level] }}
      cardKey={Level}
    />
  )
}
