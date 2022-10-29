import React from "react";
import { render } from "@testing-library/react";

import Modal from "./Modal";

describe("Modal", () => {
  test("renders the Modal component", () => {
    const [open, setOpen] = React.useState(true);
    render(
      <Modal open={open} setOpen={() => setOpen(false)}>
        Modal Content
      </Modal>
    );
  });
});
