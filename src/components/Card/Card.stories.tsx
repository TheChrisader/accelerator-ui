import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "./Card";
import Button from "../Button";

export default {
  title: "ReactComponentLibrary/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <span style={{ marginBottom: "15px" }}>
      My name is Yoshikage Kira. I'm 33 years old. My house is in the northeast
      section of Morioh, where all the villas are, and I am not married. I work
      as an employee for the Kame Yu department stores, and I get home every day
      by 8 PM at the latest.
    </span>
    <div style={{ display: "flex", width: "100%", justifyContent: "flex-end" }}>
      <Button outlined size="small">
        Click Me
      </Button>
    </div>
  </Card>
);

export const CardWithImage = Template.bind({});
CardWithImage.args = {
  imageSrc:
    "https://images.unsplash.com/photo-1666884471882-cf4d4ca0fc2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  title: "Kira Yoshikage",
};

export const CardWithTitle = Template.bind({});
CardWithTitle.args = {
  title: "Kira Yoshikage",
};

export const SimpleCard = Template.bind({});
SimpleCard.args = {};
