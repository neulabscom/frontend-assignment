import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DiscoveryButton } from './DiscoveryButton';

export default {
    title: 'Components/Discovery Button',
    component: DiscoveryButton,
  } as ComponentMeta<typeof DiscoveryButton>;

const Template: ComponentStory<typeof DiscoveryButton> = (args) => <DiscoveryButton {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Selected = Template.bind({});
Selected.args = {selected: true}