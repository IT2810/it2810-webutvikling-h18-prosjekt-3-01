import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import Expo, { AppLoading, Asset, Font, Icon } from "expo";

import Colors from "./constants/Colors";

import AppNavigator from "./navigation/AppNavigator";
import TasksProvider from "./containers/Tasks.context";

async function checkNotificationPermissions() {
  const { status } = await Expo.Permissions.askAsync(
    Expo.Permissions.NOTIFICATIONS
  );
  if (status !== "granted") {
    alert(
      "You need to enable notifications for this app if you want to get notified about your tasks and steps."
    );
  }
}

async function createAndroidNotificationChannels() {
  const tasksChannel = {
    name: "Tasks",
    description: "Get notifications for tasks",
    sound: true,
    vibrate: true,
    badge: true
  };
  const stepsChannel = {
    name: "Steps",
    description: "Get notifications for steps",
    sound: false,
    vibrate: true,
    badge: false
  };

  Expo.Notifications.createChannelAndroidAsync("tasks", tasksChannel);
  Expo.Notifications.createChannelAndroidAsync("steps", stepsChannel);
}

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  componentWillMount() {
    checkNotificationPermissions();
    if (Platform.OS === "android") {
      createAndroidNotificationChannels();
    }
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <TasksProvider>
          <View style={styles.container}>
            {Platform.OS === "ios" && <StatusBar barStyle="default" />}
            <AppNavigator />
          </View>
        </TasksProvider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf")
      })
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
