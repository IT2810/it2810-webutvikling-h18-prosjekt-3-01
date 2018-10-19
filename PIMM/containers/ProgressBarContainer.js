import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text, Platform } from "react-native";
import { Notifications } from "expo";

import ProgressBar from "../components/ProgressBar";
import TextIcon from "../components/TextIcon";
import Colors from "../constants/Colors";

export default class ProgressBarContainer extends Component {
  /*
   Setup of notifications sent to the user when the daily goal is reached
   */
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

  isGoalReached() {
    const isReached = this.props.stepsToday >= this.props.dailyGoal;
    if (isReached) {
      this.reachedStepGoal();
    }
    return isReached;
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
            progress={Math.min(stepsToday, dailyGoal) / dailyGoal}
            duration={500}
          />
          <TextIcon
            focused={this.isGoalReached()}
            focusedColor={Colors.stepBarFinishedIcon}
            name={
              Platform.OS === "ios"
                ? `ios-checkmark-circle${
                    this.isGoalReached() ? "" : "-outline"
                  }`
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
    flex: 1
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
