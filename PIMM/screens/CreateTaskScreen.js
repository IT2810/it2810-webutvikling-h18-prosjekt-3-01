import React from "react";
import { View } from "react-native";

import CreateOrEditTaskContainer from "../containers/CreateOrEditTaskContainer";
import { TasksConsumer } from "../containers/Tasks.context";

export default class CreateTaskScreen extends React.Component {
  static navigationOptions = {
    title: "Create a new task",
    headerTitleStyle: { textAlign: "center", alignSelf: "center", flex: 1 },
    headerLeft: <View />,
    headerRight: <View />
  };

  render() {
    return (
      <TasksConsumer>
        {({ addTask, allTasks }) => (
          <CreateOrEditTaskContainer
            addTask={addTask}
            isEdit={false}
            allTasks={allTasks}
          />
        )}
      </TasksConsumer>
    );
  }
}
