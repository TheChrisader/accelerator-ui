import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ImageUpload from "./ImageUpload";

export default {
  title: "ReactComponentLibrary/ImageUpload",
  component: ImageUpload,
} as ComponentMeta<typeof ImageUpload>;

const Template: ComponentStory<typeof ImageUpload> = (args) => {
  const [src, setSrc] = React.useState("");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <ImageUpload {...args} url={src} generateURL={setSrc} />
      <span
        style={{
          maxWidth: "300px",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        {" "}
        Image Url: {src}
      </span>
    </div>
  );
};

const Template2: ComponentStory<typeof ImageUpload> = (args) => {
  const [src, setSrc] = React.useState("");

  return (
    <ImageUpload {...args} url={src} preview={true} generateURL={setSrc} />
  );
};

export const WithoutPreview = Template.bind({});
WithoutPreview.args = {};

export const WithPreview = Template2.bind({});
WithPreview.args = {};
