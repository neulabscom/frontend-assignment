import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Design } from "./Design";

export default {
    title: 'Example/Design',
    component: Design
} as ComponentMeta<typeof Design>;

const Template: ComponentStory<typeof Design> = (args) => <Design />

export const Default = Template.bind({})
Default.args = {}