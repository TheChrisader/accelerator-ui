import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Checkbox from "./Checkbox";

export default {
  title: "ReactComponentLibrary/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args}>First Child</Checkbox>
);

const Template2: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Unchecked = Template.bind({});
Unchecked.args = {};

export const Checked = Template2.bind({});
Checked.args = {
  checked: true,
};
