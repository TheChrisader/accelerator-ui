import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Select from "./Select";
import Button from "../Button";

export default {
  title: "ReactComponentLibrary/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const [status, setStatus] = React.useState("option1");
  return (
    <div
      style={{
        width: "200px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Select {...args} status={status} setStatus={setStatus} />
      <Button type="submit" size="small" onClick={() => alert(status)}>
        Submit
      </Button>
    </div>
  );
};

const Template2: ComponentStory<typeof Select> = (args) => {
  const [status, setStatus] = React.useState("option1");
  return (
    <div
      style={{
        width: "200px",
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <Select {...args} status={status} setStatus={setStatus} />
    </div>
  );
};

export const NormalDropdown = Template.bind({});
NormalDropdown.args = {
  options: ["option1", "option2", "option3", "option4"],
};

export const BottomDropdown = Template2.bind({});
BottomDropdown.args = {
  options: ["option1", "option2", "option3", "option4"],
  bottom: false,
};
