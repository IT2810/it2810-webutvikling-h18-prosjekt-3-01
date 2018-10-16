import React, { Component } from "react";
import { View, Text } from "react-native";
import { CrossPlatformIcon } from "../components/TextIcon";
import Menu, { MenuItem } from "react-native-material-menu";

export default class ReminderSelector extends Component {
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  render() {
    return (
      <View style={{ flex: 1, flexDirection: "row", marginLeft: "5%" }}>
        <Menu
          ref={this.setMenuRef}
          button={
            <Text style={{ marginLeft: "5%" }} onPress={this.showMenu}>
              <CrossPlatformIcon
                iconSize={45}
                defaultColor={this.props.screenColor}
                name="notifications"
              />
            </Text>
          }
        >
          <MenuItem onPress={this.hideMenu}>1 hour before</MenuItem>
          <MenuItem onPress={this.hideMenu}>2 hours before</MenuItem>
          <MenuItem onPress={this.hideMenu}>5 hours before</MenuItem>
        </Menu>
        <Text
          onPress={this.showMenu}
          style={{
            fontWeight: "bold",
            color: this.props.screenColor
          }}
        >
          Reminder
        </Text>
      </View>
    );
  }
}
