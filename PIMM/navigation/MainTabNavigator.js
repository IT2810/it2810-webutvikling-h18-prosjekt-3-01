import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TextIcon from "../components/TextIcon";
import LinksScreen from "../screens/LinksScreen";
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

const LinkStack = createStackNavigator({
  Links: LinksScreen
});

LinkStack.navigationOptions = {
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
  StepStack,
  LinkStack,
  SettingsStack,
});
