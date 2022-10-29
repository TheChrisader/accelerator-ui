import React from "react";
import { render } from "@testing-library/react";
        
import ImageUpload from "./ImageUpload";
        
describe("ImageUpload", () => {
  test("renders the ImageUpload component", () => {
    render(<ImageUpload foo = "bar" />);
  });
});
    