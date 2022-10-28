import React from "react";
import { render } from "@testing-library/react";
        
import Select from "./Select";
        
describe("Select", () => {
  test("renders the Select component", () => {
    render(<Select foo = "bar" />);
  });
});
    