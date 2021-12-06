import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PlaceImage } from "./PlaceImage";
import HotelImg from './assets/hotel.svg'
import ChurchImg from './assets/church.svg'
import GraveyardImg from './assets/graveyard.svg'

export default {
    title: 'Example/Places',
    component: PlaceImage
} as ComponentMeta<typeof PlaceImage>;

const Template: ComponentStory<typeof PlaceImage> = (args) => <PlaceImage {...args} />;

export const Hotel = Template.bind({})
Hotel.args = {
    path: HotelImg
}

export const Church = Template.bind({})
Church.args = {
    path: ChurchImg
}

export const Graveyard = Template.bind({})
Graveyard.args = {
    path: GraveyardImg
}