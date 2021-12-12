import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Text } from './Text'

export default {
  title: 'Components/Text',
  component: Text,
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Playground = Template.bind({})
Playground.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',
}

export const Default = Template.bind({})
Default.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',
}

export const TextReactElement = Template.bind({})
TextReactElement.args = {
  children: (
    <>
      <strong>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
        tempor incidunt ut labore et dolore magna aliqua.
      </strong>{' '}
      Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis
      suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
    </>
  ),
}
