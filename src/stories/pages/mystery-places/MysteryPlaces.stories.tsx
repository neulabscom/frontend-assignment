import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MysteryPlaces } from "./MisteryPlaces";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import MapImg from 'Assets/map.svg'
import { LEVELS_PROPS } from "Consts";

export default {
  title: 'Pages/Mystery Places',
  component: MysteryPlaces,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS
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
  }
} as ComponentMeta<typeof MysteryPlaces>;
 
// const Template: ComponentStory<typeof MysteryPlaces> = (args) => <MysteryPlaces />

export const Playground = () => {
  const [Level, setLevel] = useState<LevelTypes>('hotel')

  const getBtnProps = (levelName: LevelTypes) => (
    {
      selected: levelName === Level,
      onClick: () => {
        setLevel(levelName)
        const card: any = document.getElementById('card')
        card.scrollIntoView({ behavior: 'smooth' })
      }
    }
  )

  const mapProps = {
    path: MapImg,
    buttons: [{
      btnProps: getBtnProps('hotel'),
      top: 19,
      left: 31.5
    }, {
      btnProps: getBtnProps('church'),
      top: 34,
      left: 77.5
    }, {
      btnProps: getBtnProps('graveyard'),
      top: 84,
      left: 46
    },]
  }

  return <MysteryPlaces mapProps={mapProps} cardProps={{...LEVELS_PROPS[Level]}} cardKey={Level} />
}