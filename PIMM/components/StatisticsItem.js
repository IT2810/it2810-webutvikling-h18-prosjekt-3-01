  import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import Strings from "../constants/Strings";

export default class StatisticsItem extends Component {
  render() {
    const { text, steps } = this.props;
    return (
      <View style={styles.staticsItemWrapper}>
        <Text style={styles.statsText}>{text.toUpperCase()}</Text>
        <View style={styles.statsStepWrapper}>
          <Text style={styles.statsStep}>{steps} steps</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  staticsItemWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4
  },
  statsText: {
    color: Colors.primaryBlue,
    fontSize: 15
  },
  statsStepWrapper: {
    borderBottomColor: Colors.primaryBlue,
    borderBottomWidth: 1.5
  },
  statsStep: {
    color: Colors.taskGray,
    textAlign: "right",
    fontSize: 15
  }
});
