import React, { Component } from "react";
import {
  ScrollView,
  Button,
  StyleSheet,
  View,
  Text,
  Platform
} from "react-native";
import CategorisedTasks from "../components/CategorisedTasks";
import Colors from "../constants/Colors";

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTasks: {
        1: {
          description: "Pay bills",
          due: null,
          reminders: [],
          category: "importanturgent",
          completed: false
        },
        2: {
          description: "Pay fees",
          due: new Date(),
          reminders: ["hello"],
          category: "importanturgent",
          completed: true
        }
      }, // {1: {description: "Pay bills", due: null, reminders: [], category:"importanturgent", completed: false}, 2: {description: "Pay fees", due: null, reminders: [], category:"importanturgent", completed: true}}
      idCounter: 0
    };
  }

  addTask = (
    description,
    due = null,
    reminders = [],
    category = "importanturgent"
  ) => {
    this.setState(
      state => ({
        allTasks: {
          ...state.allTasks,
          [this.state.idCounter + 1]: {
            description: description,
            due: due,
            reminders: reminders,
            category: category
          }
        }
      }),
      () => this.incrementIdCounter()
    );
  };

  editTask = (taskId, description, due, reminders, category) => {
    this.setState(state => ({
      allTasks: {
        ...state.allTasks,
        [taskId]: {
          description: description,
          due: due,
          reminders: reminders,
          category: category
        }
      }
    }));
  };

  deleteTask = taskId => {
    // Does not actually delete the key associated with the key, but works
    // well enough.
    this.setState(state => ({
      allTasks: {
        ...state.allTasks,
        [taskId]: undefined
      }
    }));
  };

  incrementIdCounter = () =>
    this.setState(state => ({
      idCounter: state.idCounter + 1
    }));

  render() {
    console.log(this.state);

    // Categories: "importanturgent", "notimportanturgent", "importantnoturgent", "notimportantnoturgent"

    return (
      <View>
        <Text h1 style={styles.title}>
          To-do list
        </Text>
        <CategorisedTasks
          title="Important & Urgent"
          categoryColor={Colors.categoryGreen}
          tasks={this.state.allTasks}
        />
        <CategorisedTasks
          title="Urgent & Not Important"
          categoryColor={Colors.categoryOrange}
          tasks={this.state.allTasks}
        />
        <CategorisedTasks
          title="Important & Not Urgent"
          categoryColor={Colors.categoryBlue}
          tasks={this.state.allTasks}
        />
        <CategorisedTasks
          title="Not Important & Not Urgent"
          categoryColor={Colors.categoryRed}
          tasks={this.state.allTasks}
        />
      </View>
    );
  }
}

// taskCategoryTitle: "#fff",
// taskUnselectedDateTime: defaultGray,
// taskTitle: darkGray,
// taskCompleted: "#e4e4e4",
// taskText: taskGray,
// taskIcon: taskGray,
// taskToggleCompleted: defaultGray,
// taskBackground: "#efefef",

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
