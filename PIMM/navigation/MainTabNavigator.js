import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TextIcon from "../components/TextIcon";
import TasksScreen from "../screens/TasksScreen";
import SettingsScreen from "../screens/SettingsScreen";
import StepScreen from "../screens/StepScreen";
import HomeScreen from "../screens/HomeScreen";

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

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TextIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-options${focused ? "" : "-outline"}`
          : "md-options"
      }
    />
  )
};

export default createBottomTabNavigator({
  TasksStack,
  StepStack,
  SettingsStack
});
