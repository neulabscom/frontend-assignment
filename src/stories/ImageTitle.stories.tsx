import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImageTitle } from './ImageTitle';

export default {
    title: 'Example/Image Title',
    component: ImageTitle,
  } as ComponentMeta<typeof ImageTitle>;

const Template: ComponentStory<typeof ImageTitle> = (args) => <ImageTitle {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Livello 1'};