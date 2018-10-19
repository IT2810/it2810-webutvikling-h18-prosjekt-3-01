import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native-elements";
import moment from "moment";
import { withNavigation } from "react-navigation";

import Colors from "../constants/Colors";
import { CrossPlatformIcon } from "../components/TextIcon";
import { TasksConsumer } from "../containers/Tasks.context";

const TaskItem = ({
  taskId,
  descriptionText,
  dueDate,
  reminder,
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
            {descriptionText}
          </Text>

          {(dueDate || reminder) && (
            <View style={styles.iconsContainer}>
              <View style={styles.iconsWrapper}>
                {dueDate && (
                  <View style={styles.dueDateWrapper}>
                    <CrossPlatformIcon
                      iconSize={25}
                      defaultColor={Colors.taskIcon}
                      styles={{ marginBottom: 0 }}
                      name="time"
                    />
                    <View style={styles.dueDateTimeWrapper}>
                      <Text style={styles.timeClock}>
                        {moment(dueDate).format("HH:mm")}
                      </Text>
                      <Text style={styles.timeDate}>
                        {moment(dueDate).format("D. MMM")}
                      </Text>
                    </View>
                  </View>
                )}
                {reminder && (
                  <CrossPlatformIcon
                    iconSize={25}
                    defaultColor={Colors.taskIcon}
                    styles={{ marginBottom: 0 }}
                    name="alarm"
                  />
                )}
              </View>
            </View>
          )}
        </TouchableOpacity>
      )}
    </TasksConsumer>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 10,
    paddingRight: 15,
    paddingVertical: 5,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 10
  },
  checkBoxContainer: {
    marginVertical: 0,
    marginHorizontal: 0,
    paddingVertical: 5,
    paddingHorizontal: 5
  },
  taskText: {
    color: Colors.taskText,
    flex: 1
  },
  iconsContainer: {
    width: 90,
    marginLeft: 6
  },
  iconsWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  dueDateWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  dueDateTimeWrapper: {
    flex: 1,
    flexWrap: "nowrap",
    alignItems: "center"
  },
  timeClock: { fontWeight: "bold", fontSize: 17, color: Colors.taskText },
  timeDate: { fontSize: 13, color: Colors.taskText }
});

export default withNavigation(TaskItem);
