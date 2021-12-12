import React from 'react'
import { DiscoveryButton } from './DiscoveryButton'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/Discovery Button',
  component: DiscoveryButton,
} as ComponentMeta<typeof DiscoveryButton>

const Template: ComponentStory<typeof DiscoveryButton> = (args) => (
  <DiscoveryButton {...args} />
)

export const Playground = Template.bind({})
Playground.args = { selected: false }

export const Default = Template.bind({})
Default.args = { selected: false }

export const Selected = Template.bind({})
Selected.args = { selected: true }
