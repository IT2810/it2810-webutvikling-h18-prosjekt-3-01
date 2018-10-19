import React from "react";
import ProgressBarContainer from "../ProgressBarContainer";
import ShallowRenderer from "react-test-renderer/shallow";

it("renders shallow correctly with example props", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<ProgressBarContainer stepsToday={5000} dailyGoal={10000} />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
