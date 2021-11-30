import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MapButton } from "./MapButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/atoms/MapButton",
  component: MapButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof MapButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MapButton> = (args) => (
  <MapButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isButtonActive: false,
};
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Selected = Template.bind({});
Selected.args = {
  isButtonActive: true,
};
