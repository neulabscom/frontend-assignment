import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MapWithDescription } from "./MapWithDescription";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/organism/MapWithDescription",
  component: MapWithDescription,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof MapWithDescription>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MapWithDescription> = (args) => (
  <MapWithDescription {...args} />
);

export const Default = Template.bind({});
