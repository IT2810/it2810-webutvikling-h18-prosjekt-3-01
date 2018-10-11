import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Tasks from "../containers/Tasks";
import ProgressBarContainer from "../containers/ProgressBarContainer";
import Colors from "../constants/Colors";

export default class TasksScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyGoal: 10000,
      stepsToday: 9000
    };
  }

  static navigationOptions = {
    title: "Tasks",
    headerTitleStyle: { color: Colors.darkGray }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.progressBarContainer}>
          <ProgressBarContainer
            dailyGoal={this.state.dailyGoal}
            stepsToday={this.state.stepsToday}
          />
        </View>
        <Tasks />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  progressBarContainer: {
    margin: 0
  }
});
