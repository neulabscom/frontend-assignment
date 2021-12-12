import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Image } from './Image';
import { LEVELS_PROPS } from 'Consts';

export default {
    title: 'Components/Image',
    component: Image,
  } as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Hotel = Template.bind({});
Hotel.args = {...LEVELS_PROPS['hotel'].imageProps};

export const Church = Template.bind({});
Church.args = {...LEVELS_PROPS['church'].imageProps};

export const Graveyard = Template.bind({});
Graveyard.args = {...LEVELS_PROPS['graveyard'].imageProps};