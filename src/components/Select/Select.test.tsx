import React from "react";
import { render } from "@testing-library/react";

import Select from "./Select";

describe("Select", () => {
  test("renders the Select component", () => {
    const options = ["one", "two"];
    render(<Select options={options} status={options[1]} />);
  });
});
