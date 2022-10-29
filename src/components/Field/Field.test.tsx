import React from "react";
import { Formik, Form } from "formik";
import { render } from "@testing-library/react";

import Field from "./Field";

describe("Field", () => {
  test("renders the Field component", () => {
    render(
      <Formik initialValues={{ foo: "bar" }} onSubmit={() => {}}>
        <Form>
          <Field name="foo" />
        </Form>
      </Formik>
    );
  });
});
