import React from "react";
import { Formik, Form } from "formik";
import { render } from "@testing-library/react";

import TextArea from "./TextArea";

describe("TextArea", () => {
  test("renders the TextArea component", () => {
    render(
      <Formik initialValues={{ foo: "bar" }} onSubmit={() => {}}>
        <Form>
          <TextArea name="foo" />
        </Form>
      </Formik>
    );
  });
});
