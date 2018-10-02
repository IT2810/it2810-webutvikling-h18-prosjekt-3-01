import React from 'react';
import { Icon } from 'expo';

import Colors from '../constants/Colors';

export default class TextIcon extends React.Component {
  render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={32}
        style={{ marginBottom: -3 }}
        color={this.props.completed ? Colors.completedIcon : Colors.progressBarFill}
      />
    );
  }
}