import React from 'react';
import Index from '../../../pages/index';
import { Story, Meta } from '@storybook/react';

let meta: Meta = {
  title: 'Pages/Home',
  component: Index,
};

export default meta;

const Template: Story<any> = (args) => <Index {...args} />;

export const HomePage = Template.bind({});
HomePage.args = {};
