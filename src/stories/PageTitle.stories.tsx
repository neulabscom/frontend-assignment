import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PageTitle } from "./PageTitle";

export default {
    title: 'Example/Page Title',
    component: PageTitle
} as ComponentMeta<typeof PageTitle>;

const Template: ComponentStory<typeof PageTitle> = (args) => <PageTitle {...args} />

export const Default = Template.bind({})
Default.args = {
    children: 'Scopri i luoghi del mistero'
}
