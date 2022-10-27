import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "./Card";

export default {
title: "ReactComponentLibrary/Card",
component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Example = Template.bind({});
Example.args = {
foo: "bar",
};
    