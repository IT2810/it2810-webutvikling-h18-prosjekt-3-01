import React from "react";
import ProgressBar from "../ProgressBar";
import ShallowRenderer from "react-test-renderer/shallow";

jest.mock("Animated", () => {
  return {
    createTimer: jest.fn(),
    timing: jest.fn(() => {
      return {
        start: jest.fn()
      };
    }),
    Value: jest.fn(() => {
      return {
        interpolate: jest.fn()
      };
    })
  };
});

it("renders correctly with example props", () => {
  const renderer = new ShallowRenderer();
  renderer.render(
    <ProgressBar progress={0.5} stepsToday={5000} dailyGoal={10000} />
  );
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
