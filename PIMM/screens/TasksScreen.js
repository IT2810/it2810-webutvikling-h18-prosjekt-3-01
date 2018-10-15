import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Tasks from "../containers/Tasks";
import ProgressBarContainer from "../containers/ProgressBarContainer";
import Colors from "../constants/Colors";
import { TasksConsumer } from "../containers/Tasks.context";
import { Button } from "react-native-elements";

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
        <Button
          title="+"
          onPress={() => this.props.navigation.navigate("Create")}
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
  },
  progressBarContainer: {
    margin: 0
  }
});
