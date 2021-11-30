import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MapDetails } from "./MapDetails";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/atoms/MapDetails",
  component: MapDetails,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof MapDetails>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MapDetails> = (args) => (
  <MapDetails {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "The Church",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
  imageName: "church",
  level: "Livello 2",
};
// More on args: https://storybook.js.org/docs/react/writing-stories/args
