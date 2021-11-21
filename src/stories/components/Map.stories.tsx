import React from 'react';
import { Story, Meta } from '@storybook/react';
import Map from '../../../components/Map';
import { MapProps, mapDataDetails } from '../../../interfaces';

import MapOne from '../../../public/maps/MapOne.svg';

const mapData: mapDataDetails[] = [
  {
    level: 1,
    title: 'The Hotel',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',

    y: 52,
    x: 105,
    levelImageUrl: '/lvl_one.png',
  },
  {
    level: 2,
    title: 'The Church',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',

    y: 100,
    x: 245,
    levelImageUrl: '/lvl_two.png',
  },
  {
    level: 3,
    title: 'The Graveyard',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',

    y: 250,
    x: 155,
    levelImageUrl: '/lvl_three.png',
  },
];

export default {
  title: 'Components/Map',
  component: Map,
  argTypes: {},
} as Meta;

const Template: Story<MapProps> = (args) => <Map {...args} />;

export const MapSvg = Template.bind({});

MapSvg.args = {
  MapSvg: MapOne,
  mapData,
  showButtons: true,
  showInfoBox: true,
  viewBoxWidth: 312,
  viewBoxHeight: 305,
  childSvgWidth: 312,
  childSvgHeight: 305,
};
