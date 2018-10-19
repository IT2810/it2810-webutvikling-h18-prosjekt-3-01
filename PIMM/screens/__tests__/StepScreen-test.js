import React from "react";
import StepScreen from "../StepScreen";
import ShallowRenderer from "react-test-renderer/shallow";

it("renders shallow correctly without props", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<StepScreen/>);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
