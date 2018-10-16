import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { CrossPlatformIcon } from "../components/TextIcon";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";
import Colors from "../constants/Colors";

export default class DateSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDatePickerVisible: false,
      chosenDate: "Set a due date and time"
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
    }, this.props.handleDateChange(moment(datetime).format("MMMM, Do YYYY HH:mm")));

  };

  render() {
    return (
      <View style={styles.container}>
        <DateTimePicker
          isVisible={this.state.isDatePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDatePicker}
          mode={"datetime"}
          is24Hour={true}
        />
        <TouchableOpacity
          style={styles.touchable}
          onPress={this.showDatePicker}
        >
          <CrossPlatformIcon
            iconSize={45}
            defaultColor={this.props.screenColor}
            name="calendar"
          />
          <Text
            style={[styles.label, { color: this.props.screenColor}]}
          >
            Due date
          </Text>
          <Text style={styles.detailLabel}>
              {this.state.chosenDate}
          </Text>
        </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: "#fff",
   },
   touchable: {
     marginLeft: '5%',
     flex: 1,
     flexDirection: 'row',
   },
   label: {
      fontWeight: 'bold',
      marginLeft: '5%',
   },
   detailLabel: {
     color: Colors.mediumGray,
   }

});
