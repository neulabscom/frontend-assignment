import React from 'react'
import { Card } from './Card'
import { LEVELS_PROPS } from 'Consts'
import { Image } from 'Components/image'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/Card',
  component: Card,
  subcomponents: { Image },
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Playground = Template.bind({})
Playground.args = {
  ...LEVELS_PROPS['hotel'],
}

export const Hotel = Template.bind({})
Hotel.args = {
  ...LEVELS_PROPS['hotel'],
}
export const Church = Template.bind({})
Church.args = {
  ...LEVELS_PROPS['church'],
}
export const Graveyard = Template.bind({})
Graveyard.args = {
  ...LEVELS_PROPS['graveyard'],
}
