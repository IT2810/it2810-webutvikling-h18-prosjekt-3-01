import React from "react";
import StatisticsContainer from "../StatisticsContainer";
import ShallowRenderer from "react-test-renderer/shallow";

it("renders shallow correctly with example props", () => {
  const renderer = new ShallowRenderer();
  renderer.render(
    <StatisticsContainer stepsToday={5000} stepsThisWeek={10000} />
  );
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
