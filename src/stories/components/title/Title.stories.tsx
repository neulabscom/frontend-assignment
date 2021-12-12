import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Title } from "./Title";
import { LEVELS_PROPS } from "Consts";

export default {
    title: 'Components/Title',
    component: Title
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />

export const Default = Template.bind({})
Default.args = {
    text: 'Scopri i luoghi del mistero'
}

export const SubTitle = Template.bind({})
SubTitle.args = {
  type: 'sub',
  text: LEVELS_PROPS['hotel'].title
}
