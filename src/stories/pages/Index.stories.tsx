import Index from '../../../pages/index';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Pages/Home',
  component: Index,
} as Meta;

const Template: Story<any> = (args) => <Index {...args} />;

export const HomePage = Template.bind({});
HomePage.args = {};
