import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Map } from './Map'
import MapImg from './assets/map.svg'
import { DiscoveryButton } from "./DiscoveryButton";

export default {
    title: 'Example/Map',
    component: Map
} as ComponentMeta<typeof Map>;

const Template: ComponentStory<typeof Map> = (args) => <Map {...args} />

export const Default = Template.bind({})
Default.args = {
    path: MapImg
}

export const MapWithButtons = Template.bind({})
MapWithButtons.args = {
    path: MapImg,
    buttons: [{
        component: <DiscoveryButton onClick={() => {}} />,
        top: 19,
        left: 31.5
    }, {
        component: <DiscoveryButton onClick={() => {}} />,
        top: 34,
        left: 77.5
    }, {
        component: <DiscoveryButton onClick={() => {}} />,
        top: 84,
        left: 46
    },]
}