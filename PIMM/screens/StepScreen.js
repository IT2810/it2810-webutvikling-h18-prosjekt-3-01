import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import ProgressBarContainer from "../containers/ProgressBarContainer";
import Colors from "../constants/Colors";

export default class StepScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyGoal: 10000,
      stepsToday: 9000
    };
  }

  static navigationOptions = {
    title: "Steps",
    headerTitleStyle: { color: Colors.darkGray }
  };

  render() {
    return (
      <ScrollView>
        <View style={[styles.container, styles.center]}>
          <View style={styles.container}>
            <Text style={styles.exampleText}>
              Her kommer en oversikt over skritt gått :-)
            </Text>
          </View>
          <View style={styles.progressBarContainer}>
            <ProgressBarContainer
              dailyGoal={this.state.dailyGoal}
              stepsToday={this.state.stepsToday}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#FFF"
  },
  exampleText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  progressBarContainer: {
    margin: 0
  },
  center: {
    justifyContent: "space-between"
  }
});
