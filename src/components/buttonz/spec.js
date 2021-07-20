import React from "react";
import renderer from "react-test-renderer";
import Buttonz from "./Buttonz";

test("Buttonz renders correctly", () => {
  const tree = renderer.create(<Buttonz />).toJSON();
  expect(tree).toMatchSnapshot();
});
