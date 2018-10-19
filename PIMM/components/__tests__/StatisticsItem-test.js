import React from 'react';
import StatisticsItem from '../StatisticsItem';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<StatisticsItem text={"eksempel"} steps={0}/>).toJSON();
  expect(tree).toMatchSnapshot();
});