import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import Colors from "../constants/Colors";
import { createStackNavigator } from "react-navigation";
import { Button } from "react-native-elements";
export default class CreateTaskScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: "Create a new task",
    headerTitleStyle: { color: Colors.darkGray }
  };

  // This is how you get the provided state and functions from the tasks context provider
  // Use where you need to use the variables.
  // <TasksConsumer>
  //   {({ allTasks, toggleCompletedTask }) => (
  //       <Text h1 style={styles.title}>
  //         Create new task yo
  //       </Text>
  //
  //   )}
  // </TasksConsumer>

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text>This is create task screen</Text>
        </View>
        <Button
          title="x"
          onPress={() => this.props.navigation.navigate("Tasks")}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
