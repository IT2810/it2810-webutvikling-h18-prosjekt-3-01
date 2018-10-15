import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Tasks from "../containers/Tasks";
import ProgressBarContainer from "../containers/ProgressBarContainer";
import Colors from "../constants/Colors";
import { TasksConsumer } from "../containers/Tasks.context";

export default class TasksScreen extends React.Component {
  static navigationOptions = {
    title: "Tasks",
    headerTitleStyle: { color: Colors.darkGray }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Tasks />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: "#fff"
  }
});
