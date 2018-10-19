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
      {!unfinishedTasks.length && !completedTasks.length ? (
        <Text style={styles.noTasks}>
          You have no tasks in this category. {"\n"} Click the add button to add
          some!
        </Text>
      ) : (
        <View style={{ marginBottom: 10 }}>
          <View>
            {!!unfinishedTasks.length || !!completedTasks.length ? (
              unfinishedTasks
            ) : (
              <Text style={styles.noTasks}>You have no unfinished tasks!</Text>
            )}
            {showCompleted &&
              (!!completedTasks.length || !!unfinishedTasks.length ? (
                completedTasks
              ) : (
                <Text style={styles.noTasks}>You have no completed tasks</Text>
              ))}
          </View>
          {!!completedTasks.length && (
            <TouchableOpacity
              onPress={() => toggleShowCompleted()}
              style={styles.toggleButtonContainer}
            >
              <Text style={styles.toggleButtonText}>
                {showCompleted
                  ? "Hide completed tasks"
                  : "Show completed tasks"}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}
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
    paddingTop: 10,
    paddingBottom: 3,
    paddingHorizontal: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  toggleButtonText: { color: Colors.taskToggleCompleted },
  noTasks: {
    margin: 10,
    color: Colors.taskToggleCompleted,
    textAlign: "center"
  }
});

export default CategorisedTasks;
