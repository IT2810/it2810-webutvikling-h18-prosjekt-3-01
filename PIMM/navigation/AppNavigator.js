import React from "react";
import { createSwitchNavigator, createStackNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import CreateTaskScreen from "../screens/CreateTaskScreen";
import EditTaskScreen from "../screens/EditTaskScreen";

const CreateTaskStack = createStackNavigator({
  Create: CreateTaskScreen
});

const EditTaskStack = createStackNavigator({
  Edit: EditTaskScreen
});

export default createSwitchNavigator({
  Main: MainTabNavigator,
  Create: CreateTaskStack,
  Edit: EditTaskStack
});
