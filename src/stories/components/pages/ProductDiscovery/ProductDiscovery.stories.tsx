import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ProductDiscovery } from "./ProductDiscovery";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "pages/ProductDiscovery",
  component: ProductDiscovery,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ProductDiscovery>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProductDiscovery> = (args) => (
  <ProductDiscovery {...args} />
);

export const Default = Template.bind({});
