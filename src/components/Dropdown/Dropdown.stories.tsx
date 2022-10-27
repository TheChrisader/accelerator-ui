import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Dropdown from "./Dropdown";

export default {
  title: "ReactComponentLibrary/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Example = Template.bind({});
Example.args = {
  options: [
    {
      option: "Choose",
    },
    {
      option: "Wisely",
    },
    {
      option: "Boy",
    },
  ],
};
