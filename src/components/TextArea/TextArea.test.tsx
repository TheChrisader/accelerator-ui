import React from "react";
import { render } from "@testing-library/react";
        
import TextArea from "./TextArea";
        
describe("TextArea", () => {
  test("renders the TextArea component", () => {
    render(<TextArea foo = "bar" />);
  });
});
    