module.exports = (component) => {
  return {
    content: `import React from "react";
import { render } from "@testing-library/react";
        
import ${component} from "./${component}";
        
describe("${component}", () => {
  test("renders the ${component} component", () => {
    render(<${component} foo = "bar" />);
  });
});
    `,
    extension: `.test.tsx`,
  };
};
