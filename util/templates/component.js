module.exports = (component) => {
  return {
    content: `import React from "react";
import "./${component}.scss";

export interface ${component}Props {
  foo: string;
}

const ${component}: React.FC<${component}Props> = ({ foo }) => (
    <div data-testid="${component}" className="foo-bar">{foo}</div>
);

export default ${component};
      `,
    extension: `.tsx`,
  };
};
