import React from 'react';
import { Story, Meta } from '@storybook/react';
import MapButton from '../../../components/MapButton';
import { CustomButtonProps } from '../../../interfaces';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/MapButton',
  component: MapButton,
  argTypes: {
    handleClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story<CustomButtonProps> = (args) => <MapButton {...args} />;

export const Default = Template.bind({});
export const Selected = Template.bind({});

Default.args = {
  variant: 'default',
  handleClick: action('Default Button Clicked'),
};

Selected.args = {
  variant: 'selected',
};
