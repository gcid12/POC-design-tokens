import React from "react";
import { Boton } from "./Boton";

export default {
  title: "Example/Boton",
  component: Boton,
  argTypes: {
    //backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Boton {...args} />;

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
