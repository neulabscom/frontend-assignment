import React from 'react';
import { Card } from './Card';
import HotelImg from 'Assets/hotel.svg'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LEVELS_PROPS } from 'Consts';

export default {
    title: 'Components/Card',
    component: Card,
  } as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Hotel = Template.bind({});
Hotel.args = { 
    ...LEVELS_PROPS['hotel'] 
};
export const Church = Template.bind({});
Church.args = { 
    ...LEVELS_PROPS['church'] 
};
export const Graveyard = Template.bind({})
Graveyard.args = {
    ...LEVELS_PROPS['graveyard'] 
}