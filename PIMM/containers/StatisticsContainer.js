import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text, Animated } from "react-native";
import Colors from "../constants/Colors";
import Strings from "../constants/Strings";
import StatisticsItem from "../components/StatisticsItem";

export default class StatisticsContainer extends Component {
  render() {
    const { stepsToday, stepsThisWeek } = this.props;
    return (
      <View style={styles.statisticsContainer}>
        <Text style={styles.headerText}>Statistics</Text>
        <View />
        <StatisticsItem text={Strings.statistics.today} steps={stepsToday} />
        <StatisticsItem
          text={Strings.statistics.average}
          steps={Math.round(stepsThisWeek / 7)}
        />
        <StatisticsItem
          text={Strings.statistics.lastWeek}
          steps={stepsThisWeek}
        />
        <View />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    marginBottom: 20,
    color: Colors.primaryBlue,
    fontSize: 18,
    lineHeight: 19
  },
  statisticsContainer: {
    marginTop: 30
  }
});
