import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Formik, Form } from "formik";

import TextArea from "./TextArea";

export default {
  title: "ReactComponentLibrary/TextArea",
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => {
  return (
    <Formik initialValues={{ input: "" }} onSubmit={() => {}}>
      <Form>
        <TextArea {...args} />
      </Form>
    </Formik>
  );
};

export const Example = Template.bind({});
Example.args = {
  label: "TextArea",
  name: "input",
};
