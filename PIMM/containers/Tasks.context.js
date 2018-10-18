import React, { Component } from "react";
import { Notifications } from "expo";
import Moment from "moment";

const TasksContext = React.createContext();
// Categories: "importanturgent", "notimportanturgent", "importantnoturgent", "notimportantnoturgent"

class TasksProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTasks: {
        1: {
          description:
            "THIS IS green importanturgent THIS IS green hei h importanturgent",
          due: null,
          reminders: [],
          category: "importanturgent",
          completed: false
        },
        2: {
          description:
            "THIS IS orange notimpor tanturgent THIS IS orange notimpor tanturgent",
          due: new Date(),
          reminders: [],
          category: "notimportanturgent",
          completed: false
        },
        3: {
          description: "THIS IS blue important noturgent",
          due: null,
          reminders: [],
          category: "importantnoturgent",
          completed: false
        },
        4: {
          description: "THIS IS red notimportan tnoturgent",
          due: new Date(),
          reminders: [new Date()],
          category: "notimportantnoturgent",
          completed: false
        },
        5: {
          description: "THIS IS green importanturgent",
          due: null,
          reminders: [],
          category: "importanturgent",
          completed: false
        },
        6: {
          description:
            "THIS IS orange notimport anturgent THIS IS orange notimpor tanturgent",
          due: new Date(),
          reminders: [new Date()],
          category: "notimportanturgent",
          completed: false
        },
        7: {
          description: "THIS IS blue importantnoturgent",
          due: null,
          reminders: [],
          category: "importantnoturgent",
          completed: false
        },
        8: {
          description: "THIS IS red notimporta ntnoturgent",
          due: new Date(),
          reminders: [new Date()],
          category: "notimportantnoturgent",
          completed: false
        },
        9: {
          description: "THIS IS green importanturgent",
          due: null,
          reminders: [],
          category: "importanturgent",
          completed: true
        },
        10: {
          description:
            "THIS IS orange notimp ortan turgent THIS IS orange notimport anturgent",
          due: new Date(),
          reminders: [new Date()],
          category: "notimportanturgent",
          completed: false
        },
        11: {
          description: "THIS IS blue importan tnoturgent",
          due: null,
          reminders: [],
          category: "importantnoturgent",
          completed: false
        },
        12: {
          description: "THIS IS red notimportant noturgent",
          due: new Date(),
          reminders: [new Date()],
          category: "notimportantnoturgent",
          completed: false
        }
      },
      idCounter: 0
    };
  }

  scheduleTaskReminder = (description, categoryColor, time, hasDueDate) => {
    const localNotification = {
      title: `Remember to ${description.toLowerCase()}`,
      body: hasDueDate
        ? `It's due on the ${Moment(due).format(
            "D. MMM at HH:mm"
          )} and is a ${categoryColor} task`
        : `It's a ${categoryColor} task.`,
      ios: { sound: true },
      android: {
        channelId: "tasks",
        color: categoryColor
      }
    };

    const schedulingOptions = {
      time: time
    };

    Notifications.scheduleLocalNotificationAsync(
      localNotification,
      schedulingOptions
    );
  };

  cancelAllSchedueledNotifications = () => {
    Notifications.cancelAllScheduledNotificationsAsync();
  };

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
    // Does not actually delete the key associated with the task, but does the
    // job well enough.
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
          deleteTask: this.deleteTask,
          scheduleTaskReminder: this.scheduleTaskReminder,
          cancelAllSchedueledNotifications: this
            .cancelAllSchedueledNotifications
        }}
      >
        {this.props.children}
      </TasksContext.Provider>
    );
  }
}

export default TasksProvider;

export const TasksConsumer = TasksContext.Consumer;
