import React from "react";
import { render } from "@testing-library/react";
        
import Field from "./Field";
        
describe("Field", () => {
  test("renders the Field component", () => {
    render(<Field foo = "bar" />);
  });
});
    