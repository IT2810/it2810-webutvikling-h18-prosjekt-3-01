import React from "react";
import { StyleSheet, View, TextInput, Text, TouchableOpacity, ScrollView } from "react-native";
import Colors from "../constants/Colors";
import CategorySelector from "../containers/CategorySelector";
import DateSelector from "../components/DateSelector";
import ReminderSelector from "../components/ReminderSelector";

export default class CreateTaskScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        screenColor: Colors.categoryGreen,
        descriptionText: '',
    };
  }

  //--Color change--//
    handleCategoryChange = color => {
        this.setState({screenColor: color})
    }


  static navigationOptions = {
    title: "Create a new task",
    headerTitleStyle: { color: Colors.darkGray }
  };


  render() {
    return (

      <View style={styles.container}>
          <View style={[styles.wrapper, {backgroundColor: this.state.screenColor}]}>
            <Text style={styles.descriptionText}>
                Task Description
            </Text>
            <TextInput
                style={styles.textInput}
                onChangeText={(text) => this.setState({descriptionText: text})}
                value={this.state.descriptionText}
                placeholder={"What do you want to remember?"}
                placeholderTextColor={"#fff"}
                underlineColorAndroid={'rgba(0,0,0,0)' }
            />
          </View>
          <Text style={[styles.label, {color: this.state.screenColor}]}>
             Importance & Urgence
          </Text>
          <CategorySelector
              handleCategoryChange={this.handleCategoryChange}
          />
          <DateSelector screenColor={this.state.screenColor}/>
          <ReminderSelector screenColor={this.state.screenColor}/>
          <Text style={{color: this.state.screenColor, fontSize: 20}}>
              {this.state.chosenDate}
          </Text>
          <TouchableOpacity style={[styles.createTaskButton, {backgroundColor: this.state.screenColor}]}>
              <Text style={styles.buttonText}>
                  Create task
              </Text>
          </TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#fff",
    },
    wrapper: {
        height: '20%',
        padding: 20,
    },
    descriptionText: {
        marginBottom: '2%',
        color: "#fff",
        textAlign: "left",
        fontWeight: "bold",
    },
    textInput: {
        color: "#fff",
        textAlign: "left",
        borderBottomWidth: 1,
        borderBottomColor: "#fff",
    },
    createTaskButton: {
        padding: 10,
        backgroundColor: Colors.categoryGreen,
        alignSelf: "center",
        borderRadius: 10,
        marginBottom: '2%',
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
    },
    label: {
        fontWeight: "bold",
        textAlign: "left",
        marginTop: '6%',
        marginLeft: '5%',
        marginBottom: '2%',
    },
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