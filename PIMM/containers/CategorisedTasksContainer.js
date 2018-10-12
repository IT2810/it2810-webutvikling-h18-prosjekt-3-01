import React, { Component } from "react";
import CategorisedTasks from "../components/CategorisedTasks";
import TaskItem from "../components/TaskItem";

export default class CategorisedTasksContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCompleted: this.props.showCompleted ? this.props.showCompleted : true
    };
  }

  toggleShowCompleted = () => {
    this.setState(state => ({
      showCompleted: !state.showCompleted
    }));
  };

  getCategoryTasks = isCompleted => {
    const allTasks = this.props.allTasks;

    return Object.keys(allTasks)
      .filter(taskId => {
        return (
          allTasks[taskId].category == this.props.category &&
          allTasks[taskId].completed === isCompleted
        );
      })
      .map((taskId, i) => {
        const item = allTasks[taskId];
        return <TaskItem key={i} taskId={taskId} {...item} />;
      });
  };

  render() {
    return (
      <CategorisedTasks
        title={this.props.title}
        categoryColor={this.props.categoryColor}
        unfinishedTasks={this.getCategoryTasks(false)}
        completedTasks={this.getCategoryTasks(true)}
        toggleShowCompleted={this.toggleShowCompleted}
        showCompleted={this.state.showCompleted}
      />
    );
  }
}
