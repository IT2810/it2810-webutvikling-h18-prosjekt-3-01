import React, { Component } from "react";
import { Notifications } from "expo";
import moment from "moment";
import Colors from "../constants/Colors";

import {
  TASK_KEY,
  IDCOUNTER,
  saveData,
  loadData,
  deleteData
} from "../utility/LocalAsyncStorage.js";

const TasksContext = React.createContext();
// Categories: "importanturgent", "notimportanturgent", "importantnoturgent", "notimportantnoturgent"

class TasksProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTasks: {
        // Uncomment to have test data
        // 1: {
        //   descriptionText:
        //     "THIS IS green importanturgent THIS IS green hei h importanturgent",
        //   dueDate: new Date(),
        //   reminder: new Date(),
        //   category: "importanturgent",
        //   completed: false
        // }
        //,
        // 2: {
        //   descriptionText:
        //     "THIS IS orange notimpor tanturgent THIS IS orange notimpor tanturgent",
        //   dueDate: new Date(),
        //   reminder: null,
        //   category: "notimportanturgent",
        //   completed: false
        // },
        // 3: {
        //   descriptionText: "THIS IS blue important noturgent",
        //   dueDate: null,
        //   reminder: null,
        //   category: "importantnoturgent",
        //   completed: false
        // },
        // 4: {
        //   descriptionText: "THIS IS red notimportan tnoturgent",
        //   dueDate: new Date(),
        //   reminder: new Date(),
        //   category: "notimportantnoturgent",
        //   completed: false
        // },
        // 5: {
        //   descriptionText: "THIS IS green importanturgent",
        //   dueDate: null,
        //   reminder: null,
        //   category: "importanturgent",
        //   completed: false
        // },
        // 6: {
        //   descriptionText:
        //     "THIS IS orange notimport anturgent THIS IS orange notimpor tanturgent",
        //   dueDate: new Date(),
        //   reminder: null,
        //   category: "notimportanturgent",
        //   completed: false
        // },
        // 7: {
        //   descriptionText: "THIS IS blue importantnoturgent",
        //   dueDate: null,
        //   reminder: null,
        //   category: "importantnoturgent",
        //   completed: false
        // },
        // 8: {
        //   descriptionText: "THIS IS red notimporta ntnoturgent",
        //   dueDate: new Date(),
        //   reminder: null,
        //   category: "notimportantnoturgent",
        //   completed: false
        // },
        // 9: {
        //   descriptionText: "THIS IS green importanturgent",
        //   dueDate: null,
        //   reminder: null,
        //   category: "importanturgent",
        //   completed: true
        // },
        // 10: {
        //   descriptionText:
        //     "THIS IS orange notimp ortan turgent THIS IS orange notimport anturgent",
        //   dueDate: new Date(),
        //   reminder: new Date(),
        //   category: "notimportanturgent",
        //   completed: false
        // },
        // 11: {
        //   descriptionText: "THIS IS blue importan tnoturgent",
        //   dueDate: null,
        //   reminder: null,
        //   category: "importantnoturgent",
        //   completed: false
        // },
        // 12: {
        //   descriptionText: "THIS IS red notimportant noturgent",
        //   dueDate: new Date(),
        //   reminder: new Date(),
        //   category: "notimportantnoturgent",
        //   completed: false
        // }
      },
      idCounter: 0
    };
  }

  scheduleTaskReminder = (
    descriptionText,
    categoryColor,
    dueDate,
    hasDueDate
  ) => {
    const localNotification = {
      title: `Remember to ${descriptionText.toLowerCase()}`,
      body: hasDueDate
        ? `It's due on the ${moment(dueDate).format(
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
      time: dueDate
    };

    Notifications.scheduleLocalNotificationAsync(
      localNotification,
      schedulingOptions
    );
  };

  cancelAllSchedueledNotifications = () => {
    Notifications.cancelAllScheduledNotificationsAsync();
  };

  getCategoryColor = category => {
    const mapping = {
      importanturgent: Colors.categoryGreen,
      notimportanturgent: Colors.categoryOrange,
      importantnoturgent: Colors.categoryBlue,
      notimportantnoturgent: Colors.categoryRed
    };
    return mapping[category];
  };

  toggleCompletedTask = taskId => {
    this.setState(
      state => ({
        allTasks: {
          ...state.allTasks,
          [taskId]: {
            ...state.allTasks[taskId],
            completed: !state.allTasks[taskId].completed
          }
        }
      }),
      () => console.log("Just toggled task!")
    );
  };

  editTask = (taskId, category, descriptionText, dueDate, reminder) => {
    this.setState(
      state => ({
        allTasks: {
          ...state.allTasks,
          [taskId]: {
            descriptionText: descriptionText,
            dueDate: dueDate,
            reminder: reminder,
            category: category
          }
        }
      }),
      () => {
        console.log("Just edited task!");
        saveData(TASK_KEY, this.state.allTasks);
      }
    );
  };

  deleteTask = taskId => {
    this.setState(
      state => ({
        ...state,
        allTasks: Object.keys(state.allTasks).filter(id => id !== taskId)
      }),
      () => {
        console.log("Just deleted task!");
        saveData(TASK_KEY, this.state.allTasks);
      }
    );
  };

  addTask = (category, descriptionText, dueDate, reminder) => {
    this.setState(
      state => ({
        allTasks: {
          ...state.allTasks,
          [state.idCounter + 1]: {
            descriptionText: descriptionText,
            dueDate: dueDate,
            reminder: reminder,
            category: category,
            completed: false
          }
        }
      }),
      () => {
        this.incrementIdCounter();
        // Debug
        console.log("Just added task!");
        saveData(TASK_KEY, this.state.allTasks);
        saveData(IDCOUNTER, this.state.idCounter);
      }
    );
  };

  incrementIdCounter = () =>
    this.setState(state => ({
      idCounter: state.idCounter + 1
    }));

  async componentDidMount() {
    const tasks = await loadData(TASK_KEY);
    const idCounter = await loadData(IDCOUNTER);
    if (tasks && idCounter) {
      this.setState({ allTasks: tasks, idCounter: idCounter }, () =>
        console.log(idCounter, this.state.idCounter)
      );
    }
  }

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
            .cancelAllSchedueledNotifications,
          getCategoryColor: this.getCategoryColor
        }}
      >
        {this.props.children}
      </TasksContext.Provider>
    );
  }
}

export default TasksProvider;

export const TasksConsumer = TasksContext.Consumer;
