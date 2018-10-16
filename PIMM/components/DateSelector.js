import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { CrossPlatformIcon } from "../components/TextIcon";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";

export default class DateSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDatePickerVisible: false,
      chosenDate: ""
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

  handleDatePicked = datetime => {
    this.setState({
      isDatePickerVisible: false,
      chosenDate: moment(datetime).format("MMMM, Do YYYY HH:mm")
    });
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <DateTimePicker
          isVisible={this.state.isDatePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDatePicker}
          mode={"datetime"}
          is24Hour={true}
        />
        <TouchableOpacity
          style={{marginLeft: '5%', flex: 1, flexDirection: "row" }}
          onPress={this.showDatePicker}
        >
          <CrossPlatformIcon
            iconSize={45}
            defaultColor={this.props.screenColor}
            name="calendar"
          />
          <Text
            style={{
              fontWeight: "bold",
              color: this.props.screenColor,
              marginLeft: "5%"
            }}
          >
            Due date
          </Text>
        </TouchableOpacity>
      </View>

    );
  }
}
