import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text, Animated } from "react-native";
import Colors from "../constants/Colors";
import Strings from "../constants/Strings";
import StatisticsItem from "../components/StatisticsItem";

export default class StatisticsContainer extends Component {
  makeStatisticsItems = () => {
    const { stepsToday, stepsThisWeek } = this.props;
    const rowData = [
      [1, Strings.statistics.today, stepsToday],
      [2, Strings.statistics.average, Math.round(stepsThisWeek / 7)],
      [3, Strings.statistics.lastWeek, stepsThisWeek]
    ];
    const rows = rowData.map(data => (
      <StatisticsItem key={data[0]} text={data[1]} steps={data[2]} />
    ));
    return rows;
  };

  render() {
    return (
      <View style={styles.statisticsContainer}>
        <Text style={styles.headerText}>Statistics</Text>
        <View />
        {this.makeStatisticsItems()}
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
