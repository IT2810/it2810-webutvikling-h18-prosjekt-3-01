import React from "react";
import TextIcon from "../TextIcon";
import CrossPlatformIcon from "../TextIcon";

import renderer from "react-test-renderer";

it("TextIcon renders correctly without props", () => {
  const tree = renderer.create(<TextIcon />).toJSON();
  expect(tree).toMatchSnapshot();
});
