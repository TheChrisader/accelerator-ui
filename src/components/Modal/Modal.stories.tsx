import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Modal from "./Modal";
import Button from "../Button";

export default {
  title: "ReactComponentLibrary/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <Button size="small" onClick={() => setOpen(true)}>
        Click to open Modal
      </Button>
      <Modal open={open} setOpen={() => setOpen(false)}>
        <h2>My name is Yoshikage Kira.</h2>

        <span>
          I'm 33 years old. My house is in the northeast section of Morioh,
          where all the villas are, and I am not married. I work as an employee
          for the Kame Yu department stores, and I get home every day by 8 PM at
          the latest. I don't smoke, but I occasionally drink. I'm in bed by 11
          PM, and make sure I get eight hours of sleep, no matter what.
        </span>
      </Modal>
    </div>
  );
};

export const Example = Template.bind({});
Example.args = {};
