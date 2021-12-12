import React from 'react'
import { Title } from './Title'
import { LEVELS_PROPS } from 'Consts'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/Title',
  component: Title,
} as ComponentMeta<typeof Title>

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />

export const Playground = Template.bind({})
Playground.args = {
  type: 'main',
  text: 'Scopri i luoghi del mistero',
}

export const PageTitle = Template.bind({})
PageTitle.args = {
  type: 'main',
  text: 'Scopri i luoghi del mistero',
}

export const CardTitle = Template.bind({})
CardTitle.args = {
  type: 'sub',
  text: LEVELS_PROPS['hotel'].title,
}
