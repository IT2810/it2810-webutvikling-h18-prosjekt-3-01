import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text, Platform } from "react-native";
import { Notifications } from "expo";

import ProgressBar from "../components/ProgressBar";
import TextIcon from "../components/TextIcon";
import Colors from "../constants/Colors";

export default class ProgressBarContainer extends Component {
  reachedStepGoal = () => {
    const localNotification = {
      title: "Good job! You reached your step goal!",
      body: "Now you can relax, or maybe you want to walk more?",
      ios: { sound: true },
      android: {
        channelId: "steps",
        color: "yellow"
      }
    };
    Notifications.presentLocalNotificationAsync(localNotification);
  };

  goalReached() {
    this.reachedStepGoal();
    return this.props.stepsToday >= this.props.dailyGoal;
  }

  componentDidMount() {
    this.reachedStepGoal();
  }
  render() {
    const { dailyGoal, stepsToday } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.stepBarText}>Daily steps</Text>
        <View style={styles.progressContainer}>
          <TextIcon
            defaultColor={Colors.stepBarWalkIcon}
            name={Platform.OS === "ios" ? `ios-walk` : "md-walk"}
          />
          <ProgressBar
            stepsToday={stepsToday}
            dailyGoal={dailyGoal}
            progress={stepsToday / dailyGoal}
            duration={500}
          />
          <TextIcon
            focused={this.goalReached()}
            focusedColor={Colors.stepBarFinished}
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
    alignItems: "center"
  },
  stepBarText: {
    color: Colors.stepBarText,
    marginLeft: 25
  }
});
