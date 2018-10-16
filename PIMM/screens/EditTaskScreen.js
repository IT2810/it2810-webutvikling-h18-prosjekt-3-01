import React from "react";
import { ScrollView, StyleSheet, View, Text, Button } from "react-native";

import Colors from "../constants/Colors";

export default class EditTaskScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskId: this.props.navigation.getParam("taskId", "NO-ID")
    };
  }

  static navigationOptions = {
    title: "Edit a task",
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
      <ScrollView style={styles.container}>
        <Text>This is the edit task screen</Text>
        <Text>taskId: {JSON.stringify(this.state.taskId)}</Text>

        <Button
          title="x"
          onPress={() => this.props.navigation.navigate("Tasks")}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
