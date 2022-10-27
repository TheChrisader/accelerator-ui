import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Formik, Form } from "formik";

import Field from "./Field";

export default {
  title: "ReactComponentLibrary/Field",
  component: Field,
} as ComponentMeta<typeof Field>;

const Template: ComponentStory<typeof Field> = (args) => {
  return (
    <Formik initialValues={{ input: "" }} onSubmit={() => {}}>
      <Form>
        <Field {...args} />
      </Form>
    </Formik>
  );
};

export const Example = Template.bind({});
Example.args = {
  label: "Input",
  name: "input",
  type: "text",
};
