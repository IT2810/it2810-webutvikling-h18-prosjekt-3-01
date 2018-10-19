import React from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { createStackNavigator } from "react-navigation";
import { Button } from "react-native-elements";
import moment from "moment";

import Colors from "../constants/Colors";
import { TasksConsumer } from "../containers/Tasks.context";
import CategorySelector from "../containers/CategorySelector";
import ReminderSelector from "../components/ReminderSelector";
import CreateOrEditTask from "../components/CreateOrEditTask";

class CreateOrEditTaskContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptionText: "",
      dueDate: null,
      reminder: null,
      category: "importanturgent",
      completed: false
    };
  }

  loadTask = taskId => {
    const task = this.props.allTasks[taskId];
    if (task) {
      this.setState({
        descriptionText: task.descriptionText,
        dueDate: task.dueDate,
        reminder: task.reminder,
        category: task.category
      });
    }
  };

  handleReminderChange = reminder => {
    this.setState({ reminder: reminder });
  };

  handleDueDateChange = date => {
    this.setState({ dueDate: date });
  };

  //--Color change--//
  handleCategoryChange = category => {
    this.setState({
      category: category
    });
  };

  handleTextChange = text => {
    this.setState({ descriptionText: text });
  };

  handleCreateTask = () => {
    const { category, descriptionText, dueDate, reminder } = this.state;
    this.props.addTask(category, descriptionText, dueDate, reminder);
  };

  handleEditTask = () => {
    const { category, descriptionText, dueDate, reminder } = this.state;
    const { taskId } = this.props;
    this.props.editTask(taskId, category, descriptionText, dueDate, reminder);
  };

  componentDidMount() {
    if (this.props.isEdit) {
      this.loadTask(this.props.taskId);
    }
  }

  render() {
    // console.log("Task state", this.state);
    return (
      <TasksConsumer>
        {({ getCategoryColor, deleteTask }) => (
          <CreateOrEditTask
            allTasks={this.props.allTasks}
            isEdit={this.props.isEdit}
            categoryColor={getCategoryColor(this.state.category)}
            descriptionText={this.state.descriptionText}
            handleTextChange={this.handleTextChange}
            handleCreateTask={this.handleCreateTask}
            handleEditTask={this.handleEditTask}
            handleDelete={deleteTask}
            handleCategoryChange={this.handleCategoryChange}
            handleDueDateChange={this.handleDueDateChange}
            handleReminderChange={this.handleReminderChange}
            selectedCategory={this.state.category}
            dueDate={this.state.dueDate}
            taskId={this.props.taskId}
          />
        )}
      </TasksConsumer>
    );
  }
}

export default CreateOrEditTaskContainer;
