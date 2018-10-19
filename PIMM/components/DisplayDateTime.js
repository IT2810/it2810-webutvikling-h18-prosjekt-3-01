import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";
import moment from "moment";
import { CrossPlatformIcon } from "../components/TextIcon";

const DisplayDateTime = ({ datetime }) => {
  return (
    <View style={styles.timeWrapper}>
      <CrossPlatformIcon
        iconSize={25}
        defaultColor={Colors.taskIcon}
        name="time"
        styles={styles.timeIcon}
      />
      <Text style={[styles.selectedTime]}>
        {moment(datetime).format("HH:mm")}
      </Text>
      <Text style={[styles.selectedTime]}>
        {moment(datetime).format("D. MMM YYYY")}
      </Text>
    </View>
  );
};

const SPACING = 15;

const styles = StyleSheet.create({
  selectedTime: {
    color: Colors.taskGray,
    fontSize: 18,
    padding: 2,
    borderBottomWidth: 1,
    borderBottomColor: Colors.darkGray,
    marginRight: 10
  },
  timeWrapper: { flexDirection: "row", marginTop: 10, alignItems: "center" },
  timeIcon: { marginHorizontal: SPACING, marginBottom: 0 }
});

export default DisplayDateTime;
