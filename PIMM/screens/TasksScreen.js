import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Tasks from "../containers/Tasks";
import ProgressBarContainer from "../containers/ProgressBarContainer";
import Colors from "../constants/Colors";
import { TasksConsumer } from "../containers/Tasks.context";
import { Button } from "react-native-elements";

export default class TasksScreen extends React.Component {
  static navigationOptions = {
    title: "Tasks",
  };

  render() {
    return (
      <ScrollView style={styles.container}>
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
    paddingTop: 5,
    backgroundColor: "#fff"
  }
});
