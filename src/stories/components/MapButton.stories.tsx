import React from 'react';
import { Story, Meta } from '@storybook/react';
import MapButton from '../../../components/MapButton';
import { CustomButtonProps } from '../../../interfaces';
import { action } from '@storybook/addon-actions';

let meta: Meta = {
  title: 'Components/MapButton',
  component: MapButton,
  argTypes: {
    handleClick: { action: 'clicked' },
  },
};

export default meta;

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
