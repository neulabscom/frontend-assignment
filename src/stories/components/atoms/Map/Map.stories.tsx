import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Map } from "./Map";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/atoms/Map",
  component: Map,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Map>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Map> = (args) => <Map {...args} />;

export const Default = Template.bind({});
