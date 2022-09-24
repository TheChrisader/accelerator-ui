module.exports = (component) => {
  return {
    content: `import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ${component} from "./${component}";

export default {
title: "ReactComponentLibrary/${component}",
component: ${component},
} as ComponentMeta<typeof ${component}>;

const Template: ComponentStory<typeof ${component}> = (args) => <${component} {...args} />;

export const Example = Template.bind({});
Example.args = {
foo: "bar",
};
    `,
    extension: `.stories.tsx`,
  };
};
