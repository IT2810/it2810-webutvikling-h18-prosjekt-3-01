import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { ExpoLinksView } from "@expo/samples";

export default class StepScreen extends React.Component {
  static navigationOptions = {
    title: "Steps"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.exampleText}>
            Her kommer en oversikt over skritt gått :-)
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  exampleText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  }
});
