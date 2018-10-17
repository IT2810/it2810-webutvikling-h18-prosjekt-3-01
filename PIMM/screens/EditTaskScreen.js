import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Colors from "../constants/Colors";
import CategorySelector from "../containers/CategorySelector";
import DateSelector from "../components/DateSelector";
import ReminderSelector from "../components/ReminderSelector";
import DeleteButton from "../components/DeleteButton";
import moment from "moment";
import { TasksConsumer } from "../containers/Tasks.context";

export default class EditTaskScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenColor: Colors.categoryGreen,
      descriptionText: "",
      chosenDate: "",
      reminder: "",
      calculatedReminderDate: "",
      category: ""
    };
  }

  handleReminderChange = reminder => {
    this.setState({ reminder: reminder }, this.calculateReminderTime);
  };

  handleDateChange = date => {
    this.setState({ chosenDate: date });
  };

  //--Color change--//
  handleCategoryChange = (color, category) => {
    this.setState({
      screenColor: color,
      category: category
    });
  };

  static navigationOptions = {
    title: "Edit a task",
    headerTitleStyle: { color: Colors.darkGray }
  };

  calculateReminderTime = () => {
    var reminderDateTime = moment(this.state.chosenDate).clone();
    reminderDateTime = reminderDateTime.subtract(this.state.reminder, "hours");
    this.setState({
      calculatedReminderDate: reminderDateTime.format("YYYY-MM-DD HH:mm")
    });
  };

  loadDataToState = () => {
    //TODO Method that updates component state with relevant persistent data
  };

  handleSaveChanges = () => {
    //TODO Pass along descriptionText, chosenDate, calculatedReminderDate and category to save changes
  };

  handleDeleteButton = () => {
    //TODO Delete the current task. Implement "You sure you want to delete this task"-check
  };

  //TODO Check if <TaskConsumer> is used correctly here:
  render() {
    return (
      <TasksConsumer>
        {({ allTasks, addTask }) => (
          <ScrollView style={styles.container}>
            <View
              style={[
                styles.wrapper,
                { backgroundColor: this.state.screenColor }
              ]}
            >
              <Text style={styles.descriptionText}>Task Description</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={text => this.setState({ descriptionText: text })}
                value={this.state.descriptionText}
                placeholder={this.state.descriptionText}
                placeholderTextColor={"#fff"}
                underlineColorAndroid={"rgba(0,0,0,0)"}
              />
            </View>
            <Text style={[styles.label, { color: this.state.screenColor }]}>
              Importance & Urgence
            </Text>
            <CategorySelector
              handleCategoryChange={this.handleCategoryChange}
            />
            <DateSelector
              screenColor={this.state.screenColor}
              handleDateChange={this.handleDateChange}
            />
            <ReminderSelector
              screenColor={this.state.screenColor}
              handleReminderChange={this.handleReminderChange}
            />
            <TouchableOpacity
              style={[
                styles.saveChangesButton,
                { backgroundColor: this.state.screenColor }
              ]}
              onPress={this.handleSaveChanges}
            >
              <Text style={styles.buttonText}>Save Changes</Text>
            </TouchableOpacity>
            <DeleteButton />
          </ScrollView>
        )}
      </TasksConsumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  wrapper: {
    height: "20%",
    padding: 20
  },
  descriptionText: {
    marginBottom: "2%",
    color: "#fff",
    textAlign: "left",
    fontWeight: "bold"
  },
  textInput: {
    color: "#fff",
    textAlign: "left",
    borderBottomWidth: 1,
    borderBottomColor: "#fff"
  },
  saveChangesButton: {
    padding: 10,
    backgroundColor: Colors.categoryGreen,
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: "2%"
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold"
  },
  label: {
    fontWeight: "bold",
    textAlign: "left",
    marginTop: "6%",
    marginLeft: "5%",
    marginBottom: "2%"
  }
});

// This is how you get the provided state and functions from the tasks context provider
// Use where you need to use the variables.
// <TasksConsumer>
//   {({ allTasks, toggleCompletedTask }) => (
//       <Text h1 style={styles.title}>
//         Create new task yo
//       </Text>
//
//   )}
// </TasksConsumer>
