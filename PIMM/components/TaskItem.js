import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Platform,
  TouchableOpacity
} from "react-native";
import { CheckBox } from "react-native-elements";
import Moment from "moment";
import { withNavigation } from "react-navigation";

import Colors from "../constants/Colors";
import { CrossPlatformIcon } from "../components/TextIcon";
import { TasksConsumer } from "../containers/Tasks.context";

const TaskItem = ({
  taskId,
  description,
  due,
  reminders,
  category,
  completed,
  navigation
}) => {
  return (
    <TasksConsumer>
      {({ toggleCompletedTask }) => (
        <TouchableOpacity
          onLongPress={() => {
            navigation.push("Edit", { taskId: taskId });
          }}
        >
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
            <CheckBox
              onPress={() => toggleCompletedTask(taskId)}
              checked={completed}
              uncheckedIcon={
                <CrossPlatformIcon
                  iconSize={25}
                  defaultColor={Colors.taskIcon}
                  name="square-outline"
                />
              }
              checkedIcon={
                <CrossPlatformIcon
                  iconSize={25}
                  defaultColor={Colors.taskIcon}
                  name="checkbox-outline"
                />
              }
              containerStyle={styles.checkBoxContainer}
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
                <CrossPlatformIcon
                  iconSize={25}
                  defaultColor={Colors.taskIcon}
                  styles={{ marginBottom: 0 }}
                  name="time"
                />
                <View style={styles.dueDateTimeWrapper}>
                  <Text style={styles.timeClock}>
                    {Moment(due).format("HH:mm")}
                  </Text>
                  <Text style={styles.timeDate}>
                    {Moment(due).format("D. MMM")}
                  </Text>
                </View>
              </View>
            )}
            {!!reminders.length && (
              <CrossPlatformIcon
                iconSize={25}
                defaultColor={Colors.taskIcon}
                styles={{ marginBottom: 0 }}
                name="alarm"
              />
            )}
          </View>
        </TouchableOpacity>
      )}
    </TasksConsumer>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 10
  },
  taskText: { color: Colors.taskText, flex: 3 },
  dueDateWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  dueDateTimeWrapper: {
    flex: 1,
    alignItems: "center"
  },
  timeClock: { fontWeight: "bold", fontSize: 17, color: Colors.taskText },
  timeDate: { fontSize: 13, color: Colors.taskText },
  checkBoxContainer: {
    marginVertical: 0,
    marginHorizontal: 0,
    paddingVertical: 0,
    paddingHorizontal: 0
  }
});

export default withNavigation(TaskItem);
