import React from "react";
import { AtomButton } from "./AtomButton";

export default {
  title: "Example/AtomButton",
  component: AtomButton,
  argTypes: {
    //backgroundColor: { control: "color" },
  },
};

const Template = (args) => <AtomButton {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  type: "secondary",
  //primary: false,
  semantic: "good",
  buttonContent: "Hello",
  compact: false,
};

export const Compact = Template.bind({});
Compact.args = {
  type: "secondary",
  //primary: false,
  semantic: "good",
  buttonContent: "Hello",
  compact: false,
};

// export const Tertiary = Template.bind({});
// Tertiary.args = {
//   type: "tertiary",
//   //primary: false,
//   buttonContent: "Hello",
//   size: "",
// };
