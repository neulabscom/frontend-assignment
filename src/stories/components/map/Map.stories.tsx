import React from 'react'
import { Map } from './Map'
import MapImg from 'Assets/map.svg'
import { DiscoveryButton } from 'Components/discovery-button'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/Map',
  component: Map,
  subcomponents: { DiscoveryButton },
} as ComponentMeta<typeof Map>

const Template: ComponentStory<typeof Map> = (args) => <Map {...args} />

export const Playground = Template.bind({})
Playground.args = {
  path: MapImg,
  buttons: [
    {
      btnProps: {
        selected: false,
        onClick: () => {},
      },
      top: 19,
      left: 31.5,
    },
    {
      btnProps: {
        selected: false,
        onClick: () => {},
      },
      top: 34,
      left: 77.5,
    },
    {
      btnProps: {
        selected: false,
        onClick: () => {},
      },
      top: 84,
      left: 46,
    },
  ],
}

export const EmptyMap = Template.bind({})
EmptyMap.args = {
  path: MapImg,
}

export const MapWithButtons = Template.bind({})
MapWithButtons.args = {
  path: MapImg,
  buttons: [
    {
      btnProps: {
        selected: false,
        onClick: () => {},
      },
      top: 19,
      left: 31.5,
    },
    {
      btnProps: {
        selected: false,
        onClick: () => {},
      },
      top: 34,
      left: 77.5,
    },
    {
      btnProps: {
        selected: false,
        onClick: () => {},
      },
      top: 84,
      left: 46,
    },
  ],
}
