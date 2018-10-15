import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

import CategorisedTasksContainer from "../containers/CategorisedTasksContainer";
import Colors from "../constants/Colors";
import { TasksConsumer } from "../containers/Tasks.context";

const Tasks = () => {
  return (
    <TasksConsumer>
      {({ allTasks }) => (
        <View>
          <Text h1 style={styles.title}>
            To-do list
          </Text>
          <CategorisedTasksContainer
            title="Important & Urgent"
            categoryColor={Colors.categoryGreen}
            category="importanturgent"
            allTasks={allTasks}
          />
          <CategorisedTasksContainer
            title="Urgent & Not Important"
            categoryColor={Colors.categoryOrange}
            category="notimportanturgent"
            allTasks={allTasks}
          />
          <CategorisedTasksContainer
            title="Important & Not Urgent"
            categoryColor={Colors.categoryBlue}
            category="importantnoturgent"
            allTasks={allTasks}
          />
          <CategorisedTasksContainer
            title="Not Important & Not Urgent"
            categoryColor={Colors.categoryRed}
            category="notimportantnoturgent"
            allTasks={allTasks}
          />
        </View>
      )}
    </TasksConsumer>
  );
};

const styles = StyleSheet.create({
  title: {
    color: Colors.tasksTitle,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 15,
    marginBottom: 20
  }
});

export default Tasks;
