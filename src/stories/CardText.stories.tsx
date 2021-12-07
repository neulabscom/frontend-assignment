import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CardText } from './CardText';

export default {
    title: 'Example/Card Text',
    component: CardText,
  } as ComponentMeta<typeof CardText>;

const Template: ComponentStory<typeof CardText> = (args) => <CardText {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'The Curch',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.'
};