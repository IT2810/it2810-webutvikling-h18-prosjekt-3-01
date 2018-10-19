// import React from "react";
// import {
//   StyleSheet,
//   View,
//   TextInput,
//   Text,
//   TouchableOpacity,
//   ScrollView,
//   Button
// } from "react-native";
// import Colors from "../constants/Colors";
// import CategorySelector from "../containers/CategorySelector";
// import DateSelector from "../components/DateSelector";
// import ReminderSelector from "../components/ReminderSelector";
// import moment from "moment";
// import { TasksConsumer } from "../containers/Tasks.context";
//
// export default class EditTaskScreen extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       taskId: this.props.navigation.getParam("taskId", "NO-ID"),
//       screenColor: Colors.categoryGreen,
//       descriptionText: "",
//       chosenDate: "",
//       reminder: "",
//       calculatedReminderDate: "",
//       category: ""
//     };
//   }
//
//   handleReminderChange = reminder => {
//     this.setState({ reminder: reminder };
//   };
//
//   handleDateChange = date => {
//     this.setState({ chosenDate: date });
//   };
//
//   //--Color change--//
//   handleCategoryChange = (color, category) => {
//     this.setState({
//       screenColor: color,
//       category: category
//     });
//   };
//
//   static navigationOptions = {
//     title: "Edit a task"
//   };
//
//
//   loadDataToState = () => {
//     //TODO Method that updates component state with relevant persistent data
//   };
//
//   handleSaveChanges = () => {
//     //TODO Pass along descriptionText, chosenDate, calculatedReminderDate and category to save changes
//   };
//
//   handleDeleteButton = () => {
//     //TODO Delete the current task. Implement "You sure you want to delete this task"-check
//   };
//
//   //TODO Check if <TaskConsumer> is used correctly here:
//   render() {
//     return (
//       <TasksConsumer>
//         {({ allTasks, addTask }) => (
//           <ScrollView style={styles.container}>
//

//             <Text>This is the edit task screen</Text>
//             <Text>taskId: {JSON.stringify(this.state.taskId)}</Text>
//
//             <Button
//               title="x"
//               onPress={() => this.props.navigation.navigate("Tasks")}
//             />
//           </ScrollView>
//         )}
//       </TasksConsumer>
//     );
//   }
// }

import React from "react";
import { View } from "react-native";
import CreateOrEditTaskContainer from "../containers/CreateOrEditTaskContainer";
import { TasksConsumer } from "../containers/Tasks.context";

export default class CreateTaskScreen extends React.Component {
  static navigationOptions = {
    title: "Edit a task",
    headerTitleStyle: { textAlign: "center", alignSelf: "center", flex: 1 },
    headerLeft: <View />,
    headerRight: <View />
  };

  state = {
    taskId: this.props.navigation.getParam("taskId", "NO-ID")
  };

  render() {
    return (
      <TasksConsumer>
        {({ editTask, allTasks }) => (
          <CreateOrEditTaskContainer
            editTask={editTask}
            isEdit={true}
            taskId={this.state.taskId}
            allTasks={allTasks}
          />
        )}
      </TasksConsumer>
    );
  }
}
