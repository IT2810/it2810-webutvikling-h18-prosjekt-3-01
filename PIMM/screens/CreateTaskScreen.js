import React from "react";
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import CategorySelector from "../containers/CategorySelector";
import TextIcon from "../components/TextIcon";
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class CreateTaskScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isDatePickerVisible: false,
    };
  }
  /*
  //--Due Date & Reminders--//
  showDatePicker = () => {
      this.setState({isDatePickerVisible: true});
  }

  hideDatePicker = () => {
      this.setState({isDatePickerVisible: false});
  }

  handlePicker = () => {

  }*/



  static navigationOptions = {
    title: "Create a new task",
    headerTitleStyle: { color: Colors.darkGray }
  };

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

  render() {
    return (
      <View style={styles.container}>

          <View style={styles.wrapperGreen}> // Contains text and textinput
            <Text style={styles.descriptionText}>
                Task Description
            </Text>
            <TextInput
                style={styles.textInput}
                onChangeText={(text) => this.setState({text: text})}
                value={this.state.descriptionText}
                placeholder={"What do you want to remember?"}
                placeholderTextColor={"#fff"}
            />
          </View>

          <Text style={styles.text}>
             Importance & Urgence
          </Text>
          <CategorySelector />



          <DateTimePicker
              isVisible={this.state.isDatePickerVisible}
              onConfirm={this.handlePicker}
              onCancel={this.hideDatePicker}

          />
          <TouchableOpacity>
              <Text>Show DatePicker</Text>
          </TouchableOpacity>




          <TouchableOpacity style={styles.createTaskButton}>
              <Text style={styles.buttonText}>
                  Create task
              </Text>
          </TouchableOpacity>//Save-Create task button
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    wrapperGreen: {
        backgroundColor: Colors.categoryGreen,
        padding: 20,
    },
    descriptionText: {
        color: "#fff",
        textAlign: "left",
        fontWeight: "bold",
    },
    textInput: {
        height: 40,
        color: "#fff",
        textAlign: "left",
        borderBottomWidth: 1,
        borderBottomColor: "#fff"
    },
    createTaskButton: {
        padding: 10,
        backgroundColor: Colors.categoryGreen,
        width: '55%',
        alignSelf: "center",
        borderRadius: 10,
        marginBottom: '3%',
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
    },
    text: {
        color: Colors.categoryGreen,
        fontWeight: "bold",
        textAlign: "left",
        marginTop: '6%',
        marginLeft: '5%',
        marginBottom: '2%',
    },
});
