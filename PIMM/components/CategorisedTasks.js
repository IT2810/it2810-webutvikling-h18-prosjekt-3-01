import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from "react-native";

import Colors from "../constants/Colors";

const CategorisedTasks = ({
  title,
  categoryColor,
  unfinishedTasks,
  completedTasks,
  toggleShowCompleted,
  showCompleted
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={[styles.header, { backgroundColor: categoryColor }]}>
        <Text h2 style={styles.headerTitle}>
          {title}
        </Text>
      </View>
      <View>
        {unfinishedTasks}
        {showCompleted && completedTasks}
      </View>

      <TouchableOpacity
        onPress={() => toggleShowCompleted()}
        style={styles.toggleButtonContainer}
      >
        <Text style={styles.toggleButtonText}>
          {showCompleted ? "Hide completed tasks" : "Show completed tasks"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.tasksBackground
  },
  header: {
    padding: 10
  },
  headerTitle: {
    color: Colors.taskCategoryTitle,
    fontSize: 18,
    fontStyle: "italic",
    fontWeight: "bold"
  },
  toggleButtonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 5
  },
  toggleButtonText: { color: Colors.taskToggleCompleted }
});

export default CategorisedTasks;
