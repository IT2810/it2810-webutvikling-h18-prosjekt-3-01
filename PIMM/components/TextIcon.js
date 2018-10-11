import React from "react";
import { Icon } from "expo";

import Colors from "../constants/Colors";

export default class TextIcon extends React.Component {
  render() {
    const { defaultColor, focusedColor, iconSize, styles } = this.props;

    return (
      <Icon.Ionicons
        name={this.props.name}
        size={iconSize}
        style={this.props.styles ? styles : { marginBottom: -3 }}
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
