import React from "react";
import { render } from "@testing-library/react";

import ImageUpload from "./ImageUpload";

describe("ImageUpload", () => {
  test("renders the ImageUpload component", () => {
    const generateURL = React.useState("")[1];
    render(<ImageUpload generateURL={generateURL} />);
  });
});
