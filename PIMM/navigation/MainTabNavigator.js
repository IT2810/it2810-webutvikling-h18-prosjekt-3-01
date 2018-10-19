import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TasksScreen from "../screens/TasksScreen";
// import SettingsScreen from "../screens/SettingsScreen";
import StepScreen from "../screens/StepScreen";

import TextIcon from "../components/TextIcon";

const StepStack = createStackNavigator({
  Steps: StepScreen
});

StepStack.navigationOptions = {
  tabBarLabel: "Steps",
  tabBarIcon: ({ focused }) => (
    <TextIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-walk${focused ? "" : "-outline"}`
          : "md-walk"
      }
    />
  )
};

const TasksStack = createStackNavigator({
  Tasks: TasksScreen
});

TasksStack.navigationOptions = {
  tabBarLabel: "Tasks",
  tabBarIcon: ({ focused }) => (
    <TextIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-checkmark-circle${focused ? "" : "-outline"}`
          : "md-checkmark-circle"
      }
    />
  )
};
// Uncomment this if you want to include a settings screen
// const SettingsStack = createStackNavigator({
//   Settings: SettingsScreen
// });
//
// SettingsStack.navigationOptions = {
//   tabBarLabel: "Settings",
//   tabBarIcon: ({ focused }) => (
//     <TextIcon
//       focused={focused}
//       name={
//         Platform.OS === "ios"
//           ? `ios-options${focused ? "" : "-outline"}`
//           : "md-options"
//       }
//     />
//   )
// };

export default createBottomTabNavigator(
  {
    StepStack,
    TasksStack
    // SettingsStack
  },
  {
    initialRouteName: "TasksStack"
  }
);
