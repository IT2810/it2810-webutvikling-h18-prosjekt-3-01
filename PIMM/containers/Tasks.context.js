import React, { Component } from "react";

const TasksContext = React.createContext();
// Categories: "importanturgent", "notimportanturgent", "importantnoturgent", "notimportantnoturgent"

class TasksProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTasks: {
        1: {
          description: "THIS IS green importanturgent",
          due: null,
          reminders: [],
          category: "importanturgent",
          completed: true
        },
        2: {
          description:
            "THIS IS orange notimportanturgent THIS IS orange notimportanturgent",
          due: new Date(),
          reminders: [new Date()],
          category: "notimportanturgent",
          completed: false
        },
        3: {
          description: "THIS IS blue importantnoturgent",
          due: null,
          reminders: [],
          category: "importantnoturgent",
          completed: false
        },
        4: {
          description: "THIS IS red notimportantnoturgent",
          due: new Date(),
          reminders: [new Date()],
          category: "notimportantnoturgent",
          completed: false
        }
      },
      // {1: {description: "Pay bills", due: null, reminders: [], category:"importanturgent", completed: false},
      //  2: {description: "Pay fees", due: null, reminders: [new Date()], category:"importantnoturgent", completed: true}}
      idCounter: 0
    };
  }

  toggleCompletedTask = taskId => {
    this.setState(state => ({
      allTasks: {
        ...state.allTasks,
        [taskId]: {
          ...state.allTasks[taskId],
          completed: !state.allTasks[taskId].completed
        }
      }
    }));
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
    // Does not actually delete the key associated with the task, but works
    // well enough.
    this.setState(state => ({
      allTasks: {
        ...state.allTasks,
        [taskId]: undefined
      }
    }));
  };

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
          [state.idCounter + 1]: {
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

  incrementIdCounter = () =>
    this.setState(state => ({
      idCounter: state.idCounter + 1
    }));

  render() {
    return (
      <TasksContext.Provider
        value={{
          allTasks: this.state.allTasks,
          toggleCompletedTask: this.toggleCompletedTask,
          addTask: this.addTask,
          editTask: this.editTask,
          deleteTask: this.deleteTask
        }}
      >
        {this.props.children}
      </TasksContext.Provider>
    );
  }
}

export default TasksProvider;

export const TasksConsumer = TasksContext.Consumer;
