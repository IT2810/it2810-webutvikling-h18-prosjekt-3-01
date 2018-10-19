import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Menu, { MenuItem } from "react-native-material-menu";
import moment from "moment";

import Colors from "../constants/Colors";
import { CrossPlatformIcon } from "../components/TextIcon";
import DisplayDateTime from "../components/DisplayDateTime";

class ReminderSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reminder: this.props.reminder ? this.props.reminder : null,
      placeholder: "Add a reminder"
    };
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

  handleReminderChoice = offsetInHours => {
    const reminderTime = moment(this.props.dueDate)
      .add(offsetInHours, "hours")
      .toISOString();
    this.setState(
      { reminder: reminderTime },
      this.props.handleReminderChange(reminderTime)
    );
    this.hideMenu();
  };

  render() {
    const { reminder, placeholder } = this.state;
    const { categoryColor, dueDate } = this.props;

    return (
      <View
        style={[styles.container, dueDate ? { opacity: 1 } : { opacity: 0.5 }]}
      >
        <Menu ref={this.setMenuRef} button={<View />}>
          <MenuItem onPress={() => this.handleReminderChoice(-1)}>
            1 hour before
          </MenuItem>
          <MenuItem onPress={() => this.handleReminderChoice(-2)}>
            2 hours before
          </MenuItem>
          <MenuItem onPress={() => this.handleReminderChoice(-3)}>
            3 hours before
          </MenuItem>
        </Menu>

        <View style={styles.container}>
          <CrossPlatformIcon
            iconSize={45}
            defaultColor={categoryColor}
            name="notifications"
          />
          <View>
            <Text style={[styles.label, { color: categoryColor }]}>
              REMINDER
            </Text>
            <TouchableOpacity onPress={this.showMenu} disabled={!dueDate}>
              {this.state.reminder ? (
                <DisplayDateTime datetime={this.state.reminder} />
              ) : (
                <Text style={styles.placeholder}>
                  {dueDate === null
                    ? `${placeholder} (add a due time first)`
                    : placeholder}
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const SPACING = 18;

const styles = StyleSheet.create({
  container: { flexDirection: "row", marginBottom: 30 },
  placeholder: {
    color: Colors.taskUnselectedDateTime,
    fontSize: 16,
    paddingVertical: 2,
    paddingHorizontal: SPACING
  },
  label: {
    textAlign: "left",
    letterSpacing: 0.5,
    marginBottom: 5,
    fontWeight: "bold",
    marginHorizontal: SPACING,
    marginTop: 3,
    marginBottom: 0
  }
});

export default ReminderSelector;
