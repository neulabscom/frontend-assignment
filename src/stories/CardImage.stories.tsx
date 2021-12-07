import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CardImage } from './CardImage';
import HotelImage from './assets/hotel.svg'

export default {
    title: 'Example/Card Image',
    component: CardImage,
  } as ComponentMeta<typeof CardImage>;

const Template: ComponentStory<typeof CardImage> = (args) => <CardImage {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Livello 1',
    pathImg: HotelImage
};