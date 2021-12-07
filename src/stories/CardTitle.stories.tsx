import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CardTitle } from './CardTitle';

export default {
    title: 'Example/Card Title',
    component: CardTitle,
  } as ComponentMeta<typeof CardTitle>;

const Template: ComponentStory<typeof CardTitle> = (args) => <CardTitle {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'The Church'};