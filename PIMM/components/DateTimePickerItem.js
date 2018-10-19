import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

import Colors from "../constants/Colors";
import { CrossPlatformIcon } from "../components/TextIcon";
import DisplayDateTime from "../components/DisplayDateTime";

class DateTimePickerItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDatePickerVisible: false,
      placeholder: "Set a date and time",
      chosenTime: this.props.chosenTime ? this.props.chosenTime : null
    };
  }

  showDatePicker = () => {
    this.setState({
      isDatePickerVisible: true
    });
  };

  hideDatePicker = () => {
    this.setState({
      isDatePickerVisible: false
    });
  };

  handleDateTimePicked = datetime => {
    const time = new Date(datetime);

    this.setState({
      isDatePickerVisible: false,
      chosenTime: time
    });
    this.props.handleDateChange(time);
  };

  render() {
    const { label, icon, placeholder, categoryColor, labelStyle } = this.props;

    return (
      <View>
        <DateTimePicker
          isVisible={this.state.isDatePickerVisible}
          onConfirm={this.handleDateTimePicked}
          onCancel={this.hideDatePicker}
          mode={"datetime"}
          is24Hour={true}
        />
        <View style={styles.container}>
          <CrossPlatformIcon
            iconSize={45}
            defaultColor={categoryColor}
            name="calendar"
          />
          <View>
            <Text style={[labelStyle, styles.label, { color: categoryColor }]}>
              {label}
            </Text>
            <TouchableOpacity onPress={this.showDatePicker}>
              {this.state.chosenTime ? (
                <DisplayDateTime datetime={this.state.chosenTime} />
              ) : (
                <Text style={styles.placeholder}>{placeholder}</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const SPACING = 15;

const styles = StyleSheet.create({
  container: { flexDirection: "row", marginVertical: 25 },
  placeholder: {
    color: Colors.taskUnselectedDateTime,
    fontSize: 16,
    paddingVertical: 2,
    paddingHorizontal: SPACING
  },
  label: { marginHorizontal: SPACING, marginTop: 3, marginBottom: 0 }
});

export default DateTimePickerItem;
