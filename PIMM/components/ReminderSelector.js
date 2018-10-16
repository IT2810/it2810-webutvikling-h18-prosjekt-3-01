import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CrossPlatformIcon } from "../components/TextIcon";
import Menu from "react-native-material-menu";
import Colors from "../constants/Colors";
import MenuFilterItem from "../components/MenuFilterItem";

export default class ReminderSelector extends Component {
    constructor(){
        super()
        this.state = {
            reminder: "Add reminders",
        }
    }
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

  handleReminderChoice = filter => {
      this.setState({reminder: filter}, this.props.handleReminderChange(filter));
      this.hideMenu();
  }

  render() {
    return (
      <View style={styles.container}>
        <Menu
          ref={this.setMenuRef}
          button={
            <Text style={styles.touchable} onPress={this.showMenu}>
              <CrossPlatformIcon
                iconSize={45}
                defaultColor={this.props.screenColor}
                name="notifications"
              />
            </Text>
          }
        >
          <MenuFilterItem onPress={this.handleReminderChoice} filter={"1 hour before"}>1 hour before</MenuFilterItem>
          <MenuFilterItem onPress={this.handleReminderChoice} filter={"2 hours before"}>2 hours before</MenuFilterItem>
          <MenuFilterItem onPress={this.handleReminderChoice} filter={"5 hours before"}>5 hours before</MenuFilterItem>
        </Menu>
        <Text
          onPress={this.showMenu}
          style={[styles.label, {color: this.props.screenColor}]}
        >
          Reminder
        </Text>
        <Text style={styles.detailedLabel}>{this.state.reminder}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: '5%',
    },
    touchable: {
        marginLeft: '5%',
    },
    label: {
        fontWeight: 'bold',
    },
    detailedLabel: {
        color: Colors.mediumGray,
    }
})
