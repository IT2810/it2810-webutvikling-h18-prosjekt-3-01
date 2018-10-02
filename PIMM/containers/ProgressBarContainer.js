import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text, Platform } from "react-native";
import ProgressBar from "../components/ProgressBar";
import TextIcon from "../components/TextIcon";

export default class ProgressBarContainer extends Component {
  state = {
    dailyGoal: this.props.dailyGoal,
    stepsToday: this.props.stepsToday
  };

  goalReached () {
    return this.state.stepsToday >= this.state.dailyGoal
  }

  componentDidMount() {
      setInterval(() => {
        this.setState(state => ({
          stepsToday: Math.min(state.stepsToday + 500, state.dailyGoal)
        }));
      }, 1000);
  }  
  
  render() {
    const { dailyGoal, stepsToday } = this.state;

    return (
      <View style={styles.container}>
        <Text>Daily steps</Text>
        <View style={styles.progressContainer}>
          <TextIcon
            name={
              Platform.OS === "ios"
                ? `ios-walk`
                : "md-walk"
            }
          />
          <ProgressBar
            stepsToday={stepsToday}
            dailyGoal={dailyGoal}
            progress={stepsToday/dailyGoal}
            duration={500}
          />
          <TextIcon
            completed = {this.goalReached()}
            name={
              Platform.OS === "ios"
                ? `ios-checkmark-circle${this.goalReached() ? "" : "-outline"}`
                : `md-checkmark-circle-outline`
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
  }
});
