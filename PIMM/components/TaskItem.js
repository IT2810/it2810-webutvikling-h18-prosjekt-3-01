import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text, Platform } from "react-native";

import Moment from "moment";
import Colors from "../constants/Colors";
import TextIcon from "../components/TextIcon";

const TaskItem = ({
  taskId,
  description,
  due,
  reminders,
  category,
  completed
}) => {
  const checkIcon = completed ? "checkbox-outline" : "square-outline";

  return (
    <View
      style={[
        styles.wrapper,
        {
          backgroundColor: completed
            ? Colors.taskCompletedBG
            : Colors.taskNotCompletedBG
        }
      ]}
    >
      <TextIcon
        iconSize={25}
        defaultColor={Colors.taskIcon}
        styles={{ marginBottom: 0, marginRight: 10 }}
        name={Platform.OS === "ios" ? `ios-${checkIcon}` : `md-${checkIcon}`}
      />
      <Text
        style={[
          styles.taskText,
          {
            textDecorationLine: completed ? "line-through" : "none",
            fontStyle: completed ? "italic" : "normal"
          }
        ]}
      >
        {description}
      </Text>
      {due && (
        <View style={styles.dueDateWrapper}>
          <TextIcon
            iconSize={25}
            defaultColor={Colors.taskIcon}
            styles={{ marginBottom: 0 }}
            name={Platform.OS === "ios" ? "ios-time" : "md-time"}
          />
          <View style={styles.dueDateTimeWrapper}>
            <Text style={styles.timeClock}>{Moment(due).format("HH:mm")}</Text>
            <Text style={styles.timeDate}>{Moment(due).format("D. MMM")}</Text>
          </View>
        </View>
      )}
      {!!reminders.length && (
        <TextIcon
          iconSize={25}
          defaultColor={Colors.taskIcon}
          styles={{ marginBottom: 0 }}
          name={Platform.OS === "ios" ? "ios-alarm" : "md-alarm"}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    margin: 10
  },
  taskText: { color: Colors.taskText, marginRight: 10, flex: 3 },
  dueDateWrapper: {
    flex: 1,

    flexDirection: "row",
    alignItems: "center"
  },
  dueDateTimeWrapper: {
    flex: 1,
    alignItems: "center"
  },
  timeClock: {},
  timeDate: {}
});

export default TaskItem;
