import React from "react";
import { Icon } from "expo";

import Colors from "../constants/Colors";

export default class TextIcon extends React.Component {
  render() {
    const { defaultColor, focusedColor, iconSize } = this.props;

    return (
      <Icon.Ionicons
        name={this.props.name}
        size={iconSize}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? focusedColor : defaultColor}
      />
    );
  }
}

TextIcon.defaultProps = {
  defaultColor: Colors.tabIconDefault,
  focusedColor: Colors.tabIconSelected,
  iconSize: 32
};
