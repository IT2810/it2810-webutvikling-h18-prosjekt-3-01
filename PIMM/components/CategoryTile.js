import React, { Component } from "react";
import { View, TouchableHighlight, StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";

const textMapping = {
  importanturgent: "IMPORTANT\n&\nURGENT",
  notimportanturgent: "URGENT\n&\nNOT IMPORTANT",
  importantnoturgent: "IMPORTANT\n&\nNOT URGENT",
  notimportantnoturgent: "NOT URGENT\n&\nNOT IMPORTANT"
};

const CategoryTile = ({
  category,
  categoryColor,
  handleSelectCategory,
  isSelected
}) => {
  return (
    <TouchableHighlight
      style={[
        styles.basicTile,
        { backgroundColor: categoryColor },
        isSelected ? { opacity: 1 } : { opacity: 0.5 }
      ]}
      onPress={() => handleSelectCategory(category)}
      underlayColor={categoryColor}
      activeOpacity={0.8}
    >
      <Text style={styles.tileText}>{textMapping[category]}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  basicTile: {
    margin: 3,
    aspectRatio: 1.6,
    flex: 1,
    justifyContent: "center",
    flexBasis: 100,
    padding: 5,
    paddingVertical: 5
  },
  tileText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
    fontSize: 13,
    lineHeight: 17
  }
});

export default CategoryTile;
