import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CardBody } from './CardBody';

export default {
    title: 'Example/Card Body',
    component: CardBody,
  } as ComponentMeta<typeof CardBody>;

const Template: ComponentStory<typeof CardBody> = (args) => <CardBody {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.'};