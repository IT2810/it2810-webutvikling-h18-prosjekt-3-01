import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { withNavigation } from "react-navigation";

const SubmitButton = ({
  text,
  navigateTo,
  categoryColor,
  onPress,
  navigation,
  disabled
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: categoryColor },
        disabled ? { opacity: 0.5 } : { opacity: 1 }
      ]}
      onPress={() => {
        onPress();
        navigation.navigate(`${navigateTo}`);
      }}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    alignSelf: "center",
    paddingVertical: 13,
    paddingHorizontal: 55
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18
  }
});

export default withNavigation(SubmitButton);
