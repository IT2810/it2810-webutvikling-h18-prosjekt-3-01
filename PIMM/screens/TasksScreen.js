import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";

import Colors from "../constants/Colors";
import CategorisedTasksContainer from "../containers/CategorisedTasksContainer";
import { TasksConsumer } from "../containers/Tasks.context";
import { CrossPlatformIcon } from "../components/TextIcon";

export default class TasksScreen extends React.Component {
  static navigationOptions = {
    title: "Tasks",
    headerTitleStyle: { textAlign: "center", alignSelf: "center", flex: 1 },
    headerLeft: <View />,
    headerRight: <View />
  };

  render() {
    return (
      <TasksConsumer>
        {({ allTasks }) => (
          <View contentContainerStyle={styles.container}>
            <ScrollView contentContainerStyle={styles.container}>
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
            </ScrollView>
            <View>
              <Button
                icon={
                  <CrossPlatformIcon
                    iconSize={33}
                    defaultColor={"white"}
                    name="add"
                  />
                }
                title=""
                onPress={() => this.props.navigation.navigate("Create")}
                buttonStyle={styles.addButton}
                containerStyle={styles.addButtonContainer}
              />
            </View>
          </View>
        )}
      </TasksConsumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.tasksBackground
  },
  title: {
    color: Colors.tasksTitle,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 15,
    marginBottom: 20
  },
  addButton: {
    backgroundColor: Colors.addTaskButton,
    width: 45,
    height: 45,
    borderRadius: 50
  },
  addButtonContainer: {
    position: "absolute",
    bottom: 10,
    right: 10
  }
});
