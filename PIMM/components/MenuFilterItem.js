/* Copied from https://github.com/mxck/react-native-material-menu/issues/19 */
import React, { Component } from "react";
import Menu, { MenuItem } from "react-native-material-menu";

export default class MenuFilterItem extends Component {
  onPress = () => {
    this.props.onPress(this.props.filter);
  };

  render() {
    return <MenuItem onPress={this.onPress}>{this.props.children}</MenuItem>;
  }
}
