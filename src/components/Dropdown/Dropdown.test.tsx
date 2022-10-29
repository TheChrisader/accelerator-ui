import React from "react";
import { render } from "@testing-library/react";

import Dropdown from "./Dropdown";

describe("Dropdown", () => {
  test("renders the Dropdown component", () => {
    const options = [{ option: "One" }];
    render(<Dropdown options={options} />);
  });
});
