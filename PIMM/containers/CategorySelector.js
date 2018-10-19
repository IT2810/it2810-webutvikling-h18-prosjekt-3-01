import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TasksConsumer } from "../containers/Tasks.context";
import CategoryTile from "../components/CategoryTile";
import Colors from "../constants/Colors";

const CategorySelector = ({
  selectedCategory,
  handleCategoryChange,
  labelStyle,
  categoryColor
}) => {
  const handleSelectCategory = identifier => {
    handleCategoryChange(identifier);
  };

  return (
    <TasksConsumer>
      {({ getCategoryColor }) => (
        <View>
          <Text style={[labelStyle, styles.label, { color: categoryColor }]}>
            IMPORTANCE & URGENCE
          </Text>
          <View style={styles.container}>
            <CategoryTile
              category={"importanturgent"}
              categoryColor={getCategoryColor("importanturgent")}
              handleSelectCategory={handleSelectCategory}
              isSelected={selectedCategory === "importanturgent" ? true : false}
            />
            <CategoryTile
              category={"importantnoturgent"}
              categoryColor={getCategoryColor("importantnoturgent")}
              handleSelectCategory={handleSelectCategory}
              isSelected={
                selectedCategory === "importantnoturgent" ? true : false
              }
            />
            <CategoryTile
              category={"notimportanturgent"}
              categoryColor={getCategoryColor("notimportanturgent")}
              handleSelectCategory={handleSelectCategory}
              isSelected={
                selectedCategory === "notimportanturgent" ? true : false
              }
            />
            <CategoryTile
              category={"notimportantnoturgent"}
              categoryColor={getCategoryColor("notimportantnoturgent")}
              handleSelectCategory={handleSelectCategory}
              isSelected={
                selectedCategory === "notimportantnoturgent" ? true : false
              }
            />
          </View>
        </View>
      )}
    </TasksConsumer>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingHorizontal: 0
  },
  label: { marginBottom: 10 }
});

export default CategorySelector;
