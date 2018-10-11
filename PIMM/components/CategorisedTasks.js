import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text, Platform } from "react-native";
import Colors from "../constants/Colors";
import TaskItem from "../components/TaskItem";

const CategorisedTasks = ({ title, categoryColor, tasks }) => {
  const showTasks = Object.keys(tasks).map((task, i) => {
    return (
      <TaskItem
        key={i}
        taskId={task}
        description={tasks[task].description}
        due={tasks[task].due}
        reminders={tasks[task].reminders}
        category={tasks[task].category}
        completed={tasks[task].completed}
      />
    );
  });

  return (
    <View>
      <View style={[styles.header, { backgroundColor: categoryColor }]}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
      <View style={styles.taskListWrapper}>{showTasks}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10
  },
  headerTitle: {
    color: Colors.taskCategoryTitle,
    fontSize: 18,
    fontStyle: "italic",
    fontWeight: "bold"
  },
  taskListWrapper: {
    backgroundColor: Colors.tasksBackground
  }
});

export default CategorisedTasks;
